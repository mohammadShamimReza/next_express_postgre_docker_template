FROM node:24-alpine

ENV NODE_ENV=development

WORKDIR /server

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]