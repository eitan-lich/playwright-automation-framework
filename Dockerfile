FROM node:18

WORKDIR /app

COPY . .

RUN chown -R root:root . && npm i && npx playwright install && npx playwright install-deps

ENTRYPOINT ["npm", "run", "test"]
