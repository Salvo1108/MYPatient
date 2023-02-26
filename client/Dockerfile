FROM node:18 
WORKDIR /client
COPY ./ ./
RUN rm -rf node_modules
RUN npm install 
RUN npm run build
# CMD ["npm", "run", "start"]


