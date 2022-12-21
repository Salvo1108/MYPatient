FROM node:16.9.0
WORKDIR /client
COPY ./ ./
EXPOSE 3000
RUN npm install -g npm@latest
RUN rm -rf node_modules
RUN npm install --force
CMD ["npm", "run", "start"]