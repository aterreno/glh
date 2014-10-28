FROM node

ADD . /usr/src/app
WORKDIR /usr/src/app

#RUN npm install hapi --save

EXPOSE 3000

CMD [ "node", "index.js" ]