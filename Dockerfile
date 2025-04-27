# mi primer dockerfile
# stage uno
FROM node:23.11.0-bullseye AS build

WORKDIR /usr/app/

COPY . .

ENV USERNAME=diegotello

RUN npm install

RUN npm run test

RUN npm run build

# stage dos de mi imagen multistage

FROM node:22-alpine AS runner

WORKDIR /usr/app/

# COPY desde stage ruta_stage ruta_final
COPY --from=build /usr/app/node_modules ./node_modules
COPY --from=build /usr/app/dist ./dist
COPY --from=build /usr/app/package*.json ./

EXPOSE 3000

CMD ["node", "dist/index.js"]