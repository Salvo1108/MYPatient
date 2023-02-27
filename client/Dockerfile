FROM node:16.3.0
WORKDIR /client
COPY ./ ./
RUN npm install -g npm@latest
RUN rm -rf node_modules
RUN npm install 
RUN npm run build
# CMD ["npm", "run", "start"]


