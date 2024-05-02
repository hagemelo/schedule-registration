FROM node:21.7 as builder

RUN apt-get update

WORKDIR /home/node/artifact
COPY --chown=node:node package*.json ./

RUN npm install -g npm@latest

COPY --chown=node:node . .

RUN npm ci --quiet
RUN npm run build

FROM node:21.7 as release
EXPOSE 9090

ARG DB_HOST
ENV DB_HOST $DB_HOST

ARG DB_USER
ENV DB_USER $DB_USER

ARG DB_PASSWORD
ENV DB_PASSWORD $DB_PASSWORD

ARG DB_NAME
ENV DB_NAME $DB_NAME

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY --from=builder /home/node/artifact /home/node/app

CMD [ "node", "dist/src/main.js" ]