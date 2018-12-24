FROM node:8

RUN mkdir -p /opt/app/api

WORKDIR /opt/app/api

COPY package.json ./
COPY ./src/api ./src/api

RUN npm install --production

EXPOSE 8080

CMD ["npm", "start"]
