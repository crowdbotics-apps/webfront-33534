
FROM alpine:3.10

# Install system dependencies
RUN apk add --no-cache --update   bash   gcc   g++   make   python2   python2-dev   py2-pip   musl-dev   postgresql-dev   git   nodejs   nodejs-npm

ADD ./ /app/webapp/
WORKDIR /app/webapp/
RUN yarn install
RUN yarn build
RUN adduser -D myuser
USER myuser
CMD ["npm", "start"]
