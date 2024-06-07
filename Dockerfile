FROM nginx:latest  
WORKDIR /usr/share/nginx/html  

COPY index.html script.js  

EXPOSE 80  
