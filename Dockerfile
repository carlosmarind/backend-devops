# Mi primer Dockerfile primera etapa de mi imagen multi stage
# Debemos ser específico en que versión se usa, node:22.14.0-bullsey no usar el latest, por que puede que no sea compatible.
# COPY desde-stage ruta stage final
#COPY --from=0 /usr/app/dist ./dist
#stage 2 de mi imagen multistage
#EXPOSE 3000

#stage 1
FROM node:22-alpine AS build

WORKDIR /usr/app/

COPY . .

ENV USERNAME=jelizalde

RUN npm install

RUN npm run test

RUN npm run build

#stage 2

FROM node:22-alpine as runner

WORKDIR /usr/app/

COPY --from=build /usr/app/dist ./dist
COPY --from=build /usr/app/node_modules ./node_modules
COPY --from=build /usr/app/package*.json ./

EXPOSE 3000

CMD ["node","dist/index.js"]
