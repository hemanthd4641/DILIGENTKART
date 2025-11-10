FROM node:18-alpine AS build

WORKDIR /app

# Install deps and build
COPY ecommerce-app/frontend/package*.json ./
RUN npm install
COPY ecommerce-app/frontend/ .
RUN npm run build

FROM node:18-alpine
WORKDIR /app

# Copy built frontend and server
COPY --from=build /app/ .

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "server.js"]
