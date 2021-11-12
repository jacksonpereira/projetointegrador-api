FROM node:alpine

WORKDIR /app

ADD ./package.json /app

RUN yarn install

RUN yarn global add @nestjs/cli

ADD ./ /app

RUN yarn run build

CMD ["node", "dist/main.js"]