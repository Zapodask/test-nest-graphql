FROM node:16.13.2-alpine

WORKDIR /usr/app

COPY . ./

RUN yarn

EXPOSE 5000

CMD ["yarn", "start:dev"]
