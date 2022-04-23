# vpcelm

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
server {
    listen 80;
    server_name knowledge.base.sa.bj1;
    location / {
        root   /home/haodf/nknowledge/client/dist
        index  index.html
    }
}


  server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
 }

    server {
        listen 80;
        server_name knowledge.base.sa.bj1;
        location / {
                root  /home/haodf/nknowledge/client/dist
                index index.html 
        }
    }
