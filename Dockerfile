
FROM alpine:3.14

RUN apk add --no-cache --update libc6-compat  bash   gcc   g++   make   python2   python2-dev   musl-dev   postgresql-dev   git   nodejs npm
RUN npm install -g yarn
ADD ./ /src/
WORKDIR /src/
RUN yarn install --ignore-engines
RUN yarn build
CMD ["yarn", "start"]