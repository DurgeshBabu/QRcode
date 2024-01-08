# Use the official lightweight Node image
FROM node:20.10.0

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install --force

# Copy the app files to the working directory
COPY . .

# Build the Next.js app
RUN npm run build 

# Expose the app port
EXPOSE 3000

# Set the command to run the app using Next.js
CMD ["npm", "start"]
