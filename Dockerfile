FROM node:18
WORKDIR /usr/express
COPY /stubs-server/package*.json ./
RUN npm i
COPY /stubs-server .
