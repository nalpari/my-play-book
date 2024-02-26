# nginx 구동
FROM nginx:stable-alpine

ENV NGINX_HOST=portal.metabot.pro
ENV NGINX_PORT=443
ENV TZ=Asia/Seoul
ARG APP_PATH=/usr/local/rpa-portal-app

# SET TimeZone
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ARG DISABLE_CACHE

COPY . .

RUN ls ./dist

COPY ./dist ${APP_PATH}/html

WORKDIR ${APP_PATH}

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]