    FROM node:latest
    ENV HOME /root
    WORKDIR /root
    COPY . .
    COPY package*.json .
    COPY package*.json ./front-end
    RUN npm install
    RUN npm install react-scripts@3.4.1 -g --silent
    RUN npm ci
    COPY . ./
    ENV NODE_OPTIONS="--openssl-legacy-provider"
    WORKDIR /root/front-end
    RUN npm i --save @fortawesome/fontawesome-svg-core
    RUN npm install --save @fortawesome/free-solid-svg-icons
    RUN npm install --save @fortawesome/react-fontawesome
    WORKDIR /root
    EXPOSE 8000
    CMD npm run dev
