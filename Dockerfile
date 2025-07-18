FROM nginx:alpine

COPY . /usr/share/nginx/html/

EXPOSE 80

CMD ["NGINX", "-g", "daemon off;"]