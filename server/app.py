from flask import Flask, jsonify, request, json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from bson import json_util
from datetime import datetime
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from uuid import uuid4

app = Flask(__name__)


app.config['MONGO_DBNAME'] = 'MYPatient_DB'
app.config['MONGO_URI'] = 'mongodb://root:root@localhost:27017/'
tokenExpires = []

mongo = PyMongo(app)
bcrypt = Bcrypt(app)

CORS(app)

@app.route('/inserPatient', methods=['GET', 'POST'])
def register():
    patient = mongo.db.patient
    name = request.get_json()['name']
    surname = request.get_json()['surname']
    amka = request.get_json()['amka']
    address = request.get_json()['address']
    number = request.get_json()['number']
    email = request.get_json()['email']
    # file = request.get_json()['file']

    
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
        # 'file': file,
        'create': created,
    })
    else:
        return "Already registered patient", 400


    return jsonify({'result': "Registered Patient"}),200


@app.route('/login', methods=['GET', 'POST'])
def login():
    users = mongo.db.users
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ""

    response = users.find_one({'email' : email})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = uuid4()
            result = jsonify({'token': access_token, 'name': response['name']})

            return result, 200
        else:
            result = jsonify({'error': "Invalid username and password"})
            return result, 400
    else:
        result = jsonify({'result': "No Results found"})

    return result


@app.route('/logout', methods=['POST'])
def logout():
    token = request.get_json()['token']
    tokenExpires.append(token)
    return jsonify({'result': "Access token revoked"}),200
    

@app.route('/createadmin', methods=['GET', 'POST'])
def createAdmin():
    users = mongo.db.users
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


@app.route('/foundAllPatient', methods=['GET', 'POST'])
def founAllPatient():
    patient = mongo.db.patient
    allPazienti = []

    result = patient.find()
    for doc in result:
        allPazienti.append(doc)

    return json.loads(json_util.dumps(allPazienti))
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
