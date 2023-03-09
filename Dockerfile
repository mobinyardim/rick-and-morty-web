FROM node:16
WORKDIR /rick-and-morty-web

COPY /frontend/package.json /rick-and-morty-web/frontend/package.json
COPY /frontend/package-lock.json /rick-and-morty-web/frontend/package-lock.json

COPY /backend/package.json /rick-and-morty-web/backend/package.json
COPY /backend/package-lock.json /rick-and-morty-web/backend/package-lock.json

RUN cd backend && npm install
RUN cd frontend &&  npm install

RUN npm install -g serve

COPY . .

RUN cd frontend &&  npm run build