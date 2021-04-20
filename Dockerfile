FROM node:10

# Create app directory
WORKDIR /usr/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build

# COPY .env ./dist/
WORKDIR ./dist

# COPY uploads ./uploads

# COPY msf ./msf
RUN mkdir -p ./uploads


EXPOSE 6200

CMD [ "node", "app.js" ]