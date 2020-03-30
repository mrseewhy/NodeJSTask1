var http = require('http');
var url = require('url');
var fs = require('fs');



http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    // Write data in 'Output.txt' . 
        fs.writeFile('Output.txt', data, (err) => { 
        data = document.getElementById("message")
    // In case of a error throw err. 
    if (err) throw err; 
    }) 
    return res.end();
  });
}).listen(8080);
console.log("Serving")