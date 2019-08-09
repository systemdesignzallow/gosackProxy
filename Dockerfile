FROM node:11.15.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install

# expose port for node
EXPOSE 6003

CMD ["node", "server/index.js"]
