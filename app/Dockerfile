FROM node:16.13.2-alpine

WORKDIR /usr/app

COPY package.json yarn.lock tsconfig.json tsconfig.build.json ./

RUN yarn

EXPOSE 5000

CMD ["yarn", "start:dev"]
