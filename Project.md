# Description

Starts a web server in localhost using default port 3001.
It shows a welcome message when accessed:

```
]$ curl -v http://localhost:3001
* Host localhost:3001 was resolved.
* IPv6: ::1
* IPv4: 127.0.0.1
*   Trying [::1]:3001...
* Connected to localhost (::1) port 3001
* using HTTP/1.x
> GET / HTTP/1.1
> Host: localhost:3001
> User-Agent: curl/8.13.0
> Accept: */*
> 
* Request completely sent off
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Content-Type: text/html; charset=utf-8
< Content-Length: 29
< ETag: W/"1d-5iKE9nGv4KhrU4pnhFWQ55OzP0c"
< Date: Fri, 11 Apr 2025 13:39:08 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
Hola mundo al usuario default
```

# Steps

In order to test the application along with the official [documentation](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script) these steps were necessary:

- sudo npm install -g typescript
- npm i typescript --save-dev | REF: https://stackoverflow.com/questions/39404922/tsc-command-not-found-in-compiling-typescript
