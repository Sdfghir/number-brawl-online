FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist ./dist
COPY --from=build /app/multiplayer-server.mjs ./multiplayer-server.mjs
COPY --from=build /app/package.json ./package.json
EXPOSE 4173
CMD ["node", "multiplayer-server.mjs", "--no-open"]
