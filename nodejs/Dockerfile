FROM node:dubnium-alpine

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Instalar todas as dependencias do projeto.
# Invés de copiar o diretório inteiro, copiar somente package.json e package-lock.json.
# Caso os arquivos estejam modificados, docker irá executar npm install.
# Caso contrário, irá pular essa etapa como o mecanismo de cached Docker layers, agilizando o processo de build.
# Referência: Dockerizing a Node.js web app https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000