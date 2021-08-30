var fs = require("fs");
var http = require("http");




var server = http.createServer(function(request, response) {
    console.log("URL " + request.url);
    response.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});

    var myReader = fs.createReadStream(__dirname + "/index.html")
    myReader.pipe(response)
    // myReader = fs.createReadStream(__dirname + "/testFile.json")
    // myReader.pipe(response)
});

server.listen(3333, "127.0.0.1");
console.log("LISTEN PORT 3333");