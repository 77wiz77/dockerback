# dockerback

# Сборка образа

docker build . -t wizdock77/counter-for-docker

# Запуск образа

docker run -p 49160:8080 -d wizdock77/counter-for-docker

# отобразить все контейнеры, чтобы получить id нужного нам

docker ps

# отобразить логи

docker logs <container_id>

# пример логов

running on http://localhost:8080

# войти в контейнер в интерактивном режиме

docker exec -it <container id> /bin/bash

# остановить запущеный контейнер

docker stop <container_id>

# Загружаем образ в DockerHub

docker tag local-image:tagname new-repo:tagname

docker push new-repo:tagname

# пример:

docker tag wizdock77/counter-for-docker wizdock77/counter-for-docker

docker push wizdock77/counter-for-docker

# проверка контейнера

curl -i localhost:49160
