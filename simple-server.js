let http = require("http");
let fs = require("fs");
let path = require("path");

http.createServer( (req, res) => {

  console.log(`${req.method} request for ${req.url}`);

  if (req.url === '/'){
    fs.readFile("./public/index.html", "UTF-8", (err, html) => {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(html);
    });
  }else{
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("404 File Not Found");
  }

}).listen(3000);