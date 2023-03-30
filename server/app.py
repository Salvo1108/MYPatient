from flask import Flask, jsonify, request, json
from bson import json_util
from datetime import datetime
from flask_bcrypt import Bcrypt
from uuid import uuid4
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


app = Flask(__name__)
app.config['CORS_HEADERS'] = ['Content-Type, auth']
app.config['CORS_METHODS'] = ["GET,POST,OPTIONS"]
app.config['CORS_SUPPORTS_CREDENTIALS'] = True
app.config["JWT_SECRET_KEY"] = "cOZGB99{JQ{T*G!V(03^8LwsL*I52"
jwt = JWTManager(app)
cors = CORS(app, resources={r"/*": {"origins": "http://mypatientcare.eu"}})


client = MongoClient(host="mongo",
                     port=27017, 
                     username="root", 
                     password="root",
                    authSource="admin")

db_obj = client["MYPatient_DB"]
bcrypt = Bcrypt(app)

@app.route('/api/inserPatient', methods=['GET', 'POST'])
@cross_origin()
def register():
    patient = db_obj.patient
    name = request.get_json()['name']
    surname = request.get_json()['surname']
    amka = request.get_json()['amka']
    address = request.get_json()['address']
    number = request.get_json()['number']
    email = request.get_json()['email']

    
    created = datetime.utcnow()
    check_patient = patient.find_one({'email': email})

    if check_patient == None :

        patient.insert_one({
        'name': name,
        'surname': surname,
        'amka': amka,
        'email': email,
        'number': number,
        'address': address,
        'create': created,
    })
    else:
        return "Already registered patient", 400


    return jsonify({'result': "Registered Patient"}),200


@app.route('/api/login', methods=['GET', 'POST'])
@cross_origin()
def login():
    users = db_obj.users
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ""

    response = users.find_one({'email' : email})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity=email)
            result = jsonify({'token': access_token, 'name': response['name']})

            return result, 200
        else:
            result = jsonify({'error': "Invalid username and password"})
            return result, 400
    else:
        result = jsonify({'result': "No Results found"}), 400

    return result


@app.route('/api/logout', methods=['POST'])
@cross_origin()
def logout():
    return jsonify({'result': "Access token revoked"}),200
    

@app.route('/api/createadmin', methods=['POST'])
@cross_origin()
def createAdmin():
    users = db_obj.users
    name = request.get_json()['name']
    surname = request.get_json()['surname']
    email = request.get_json()['email']

    password = bcrypt.generate_password_hash(
        request.get_json()['password']).decode('utf-8')
    
    created = datetime.utcnow()
    check_user = users.find_one({'email': email})

    if check_user == None :

        users.insert_one({
        'name': name,
        'surname': surname,
        'email': email,
        'password': password,
        'create': created,
    })
    else:
        return "Already registered user", 400
    
    return jsonify({'result': "Registered Admin"}),200



@app.route('/api/foundAllPatient', methods=['GET'])
@cross_origin()
def founAllPatient():
    patient = db_obj.patient
    allPazienti = []

    result = patient.find()
    for doc in result:
        allPazienti.append(doc)
    
    tablePazienti = json_util.dumps(allPazienti)

    return jsonify(json.loads(tablePazienti)),200
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
