FROM node:latest as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json ./package.json
COPY src ./src
COPY public ./public
COPY yarn.lock ./yarn.lock

RUN yarn install --silent

COPY tsconfig.json ./tsconfig.json

RUN yarn run build

FROM nginx:1.13.9-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
