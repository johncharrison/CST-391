FROM node

WORKDIR /api

COPY ./* /api/
RUN npm install -g npm@latest
RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "start" ]