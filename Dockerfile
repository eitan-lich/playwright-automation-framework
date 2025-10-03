FROM node:18
WORKDIR /app

# This optimizes the build by only copying the package files first and only if they change then this layer will change
COPY package*.json ./ 

RUN npm ci && \
    npx playwright install && \
    npx playwright install-deps

COPY . .

ENTRYPOINT ["npm", "run", "test"]