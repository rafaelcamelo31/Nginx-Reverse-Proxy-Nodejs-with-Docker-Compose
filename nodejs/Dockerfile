FROM node:dubnium-alpine AS api

WORKDIR /usr/src/app

RUN apk update && apk add wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

FROM nginx:stable-alpine AS proxy

COPY /nginx/default.conf /etc/nginx/conf.d/default.conf
