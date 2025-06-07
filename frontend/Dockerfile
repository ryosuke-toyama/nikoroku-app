FROM node:22-alpine

WORKDIR /app
COPY frontend/package.json frontend/package-lock.json /app/
RUN npm install --flozen-lockfile
COPY frontend/ /app/
EXPOSE 5137
CMD ["npm", "start"]