FROM node
WORKDIR /app
COPY . .
RUN npm install
ENV PORT=3000
CMD [ "node","server.js" ]
