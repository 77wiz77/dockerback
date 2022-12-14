FROM node:18.10-alpine3.15

# создание директории приложения
WORKDIR /usr/src/app

# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности
# скопировать оба файла: package.json и package-lock.json
COPY package.json yarn.lock ./

RUN yarn install
# Если вы создаете сборку для продакшн
# RUN yarn ci --only=production

# копируем исходный код
COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]