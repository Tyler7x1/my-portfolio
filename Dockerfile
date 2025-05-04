FROM node:22-alpine

RUN addgroup portfolio-frontend && adduser -S -G portfolio-frontend dev

WORKDIR /portfolio-frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R dev:portfolio-frontend /portfolio-frontend

USER dev

EXPOSE 5173

CMD ["npm", "run", "dev"]


