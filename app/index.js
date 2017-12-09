import http from "http";
import app,{http_port} from "./server";
import {default as enableDestroy } from 'server-destroy';

var server = null;


var initHttpServer = () =>{
  if(server != null){
    server.destroy();
    console.log("updating server");
}
  server =  http.createServer(require('./server.js').default);
  server.listen(http_port);
  console.log("server listen ",http_port);
  enableDestroy(server);
}

if (module.hot) {
    module.hot.accept("./server", () => {initHttpServer()});
}

initHttpServer();
