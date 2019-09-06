FROM node
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3004
CMD ["npm", "start"]