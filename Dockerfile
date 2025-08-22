FROM node:18

WORKDIR /app

COPY . ./app

ENTRYPOINT ["npm", "run", "test"]