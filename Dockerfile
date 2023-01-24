FROM node:12.0-slim
COPY . .
RUN npm install
RUN npm install -g tsc
RUN npm install -g tsc-watch
RUN npm install -g typescript
RUN tsc
RUN ls dist
CMD ["node", "./dist/server.js"]
