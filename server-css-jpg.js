let http = require("http");
let fs = require("fs");
let path = require("path");

http.createServer(function(req, res){

  console.log(`${req.method} request for ${req.url}`);

  if (req.url === '/'){
    fs.readFile("./public/index.html", "UTF-8", function(err, html){
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(html);
    });
  }else if(req.url.match(/.css$/)){
    let cssPath = path.join(__dirname, "public", req.url);
    let fileStream = fs.createReadStream(cssPath, "UTF-8");

    res.writeHead(200, {"Content-Type": "text/css"});
    // Enganchamos el stream que hemos creado al de la respuesta
    fileStream.pipe(res);
  }else if(req.url.match(/.jpg$/)){
    let imagePath = path.join(__dirname, "public", req.url);
    // leemos la imagen en binario
    let imageStream = fs.createReadStream(imagePath);

    res.writeHead(200, {"Content-Type": "image/jpeg"});
    imageStream.pipe(res);
  }else{
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("404 File Not Found");
  }

}).listen(3000);
// Encadenamos la creación del server y el listen

console.log("Servidor corriendo en puerto 3000");