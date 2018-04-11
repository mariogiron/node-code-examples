let http = require("http");

let data = require("./data/inventory");

http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type": "text/json"});
  res.end(JSON.stringify(data));
}).listen(3000);

console.log("Servidor escuchando en puerto 3000");