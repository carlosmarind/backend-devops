# Mi primer Dockerfile primera etapa de mi imagen multi stage
# stage1
# Debemos ser específico en que versión se usa, node:22.14.0-bullsey no usar el latest, por que puede que no sea compatible.

FROM node:22.14.0-bullseye

WORKDIR /usr/app/
COPY . .
RUN npm install
#RUN npm run test
#RUN npm run build

# COPY desde-stage ruta stage final
#COPY --from=0 /usr/app/dist ./dist
#stage 2 de mi imagen multistage
#EXPOSE 3000
