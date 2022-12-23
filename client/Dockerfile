FROM node:16.9.0
WORKDIR /client
COPY ./ ./
RUN npm install -g npm@latest
RUN rm -rf node_modules
RUN npm install --force
RUN npm run build
# CMD ["npm", "run", "start"]


