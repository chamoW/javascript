FROM nginx:latest
EXPOSE 8055
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./js /usr/share/nginx/html