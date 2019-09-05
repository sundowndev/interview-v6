FROM node:8

WORKDIR /usr/app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
COPY src src

# Install
RUN npm install

# Build
RUN npm run build

CMD ["npm", "run", "serve"]

EXPOSE 3000