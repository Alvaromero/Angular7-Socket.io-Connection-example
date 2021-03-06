# WebSockets connection example

> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

A simple example of connecting WebSockets for receiving real-time data.


## Used :
0) [Stylus](https://github.com/stylus/stylus/#stylus-) 
    `npm install stylus -g`
    
1) [Material](https://material.angular.io/guide/getting-started#alternative-2-angular-devkit-6-) 
    V>6 `ng add @angular/material`

2) [SOCKET-IO official site](https://socket.io/)
    + [socket.io-client](https://www.npmjs.com/package/socket.io-client) 
        and 
      [@types/socket.io-client](https://www.npmjs.com/package/@types/socket.io-client)
       - `npm i socket.io-client --save`
       - `npm i @types/socket.io-client --save`
       
    + [ngx-socket-io](https://www.npmjs.com/package/ngx-socket-io)
        module for Angular 7.
        - `npm i ngx-socket-io --save`
        
3) Fixed a problem with [CORS](https://ru.wikipedia.org/wiki/Cross-origin_resource_sharing)

   Create file "proxy.conf.json"
      ```json
      {
        "/api/*": {
          "target": "http://localhost:3000",
          "secure": false,
          "logLevel": "debug",
          "changeOrigin": true
        }
      }
      ```
   and fix "package.json"
      ```json
      {
         "name": "frontend",
         ...
         "scripts": {
            "start": "ng serve --open --host=0.0.0.0 --port=4200 --proxy-config ./proxy.conf.json",
            ...
         }
      }
      ```
      
4) Fixed a problem with 
   - "[ReferenceError: global is not defined](https://github.com/angular/angular-cli/issues/8160#issuecomment-386153833)"  
   просто добавить код ниже, в файл `src/polyfills.ts`
   
    ```json
    (window as any).global = window; // https://github.com/angular/angular-cli/issues/8160#issuecomment-386153833
   ```
   Ну или в HTML странице добавить код ниже 
   ```HTML
   <header>
      <script> var global = global || window; </script>  
   </header>
   ```
    
    
## Run Angular Client:
```bash
npm install

ng build  or  npm build
```

START Server and Open in your browser [http://localhost:3000](http://localhost:3000/)

