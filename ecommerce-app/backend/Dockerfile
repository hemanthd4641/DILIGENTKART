FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies (copy package.json first for better cache)
COPY ecommerce-app/backend/package*.json ./
RUN npm install --production

# Copy source
COPY ecommerce-app/backend/ .

ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000

CMD ["node", "server.js"]
