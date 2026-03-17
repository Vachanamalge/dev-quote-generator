# ==========================================
# STAGE 1: Build the React App
# ==========================================
# Pull a lightweight Node.js image
FROM node:20-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json files first (for better caching)
COPY package*.json ./

# Install the dependencies inside the container
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the React app for production
RUN npm run build

# ==========================================
# STAGE 2: Serve the App with Nginx
# ==========================================
# Pull a lightweight Nginx web server image
FROM nginx:alpine

# Copy the compiled HTML/JS from Stage 1 into the Nginx server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]

