# Use official Node.js image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package.json first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of app
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "src/index.js"]
