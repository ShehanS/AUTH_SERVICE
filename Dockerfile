FROM node:latest

COPY . /AUTH_SERVICE

WORKDIR /AUTH_SERVICE

RUN npm install --production

EXPOSE 9000

CMD ["node","index.js"]