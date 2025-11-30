FROM node:18

WORKDIR /app

# 先複製 backend 的 package.json 只為了 npm install
COPY backend/package*.json ./backend/

RUN cd backend && npm install

# 再複製真正的 backend + frontend 程式碼
COPY backend ./backend
COPY frontend ./frontend

EXPOSE 3000

CMD ["node", "backend/server.js"]
