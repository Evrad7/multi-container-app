FROM node:lts-alpine AS builder

ENV NODE_OPTIONS="--dns-result-order=ipv4first"

WORKDIR /client

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build



FROM nginx:latest

EXPOSE 3000

COPY   ./default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /client/build /usr/share/nginx/html
