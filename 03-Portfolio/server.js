// Start our server
var http = require('http')
var PORT = 8080;
var server = http.createServer(handleRequest);
  // Callback triggered when server is successfully listening. Hurray!
server.listen(PORT, function(){
    console.log("Server is listening on: http://localhost: " + PORT);
});
// Create a function which handles incoming requests and sends responses
  
function handleRequest(req, res){
// Capture the url the request is made to
const path = req.url;
switch (path) {
    case "/":
      return displayRoot(res);
    case "/portfolio":
      return displayPortfolio(res);
    default:
      return display404(path, res);
    }
  }
 
  // console.log('current path, path')
  // Depending on the URL, display a different HTML file.
 
    // When someone visits the "http://localhost:8080/" path, this function is run.
function displayRoot(res){
    const myHTML = "<html>" + "<body><h1>HOME PAGE</h1>" +  "<a href = '/portfolio'>Portfolio</a>"
     + "</body></html>";
     
     res.writeHead(200, {"Content-Type": "text/html"});
     res.end(myHTML);
    
}
function displayPortfolio(res){
    var myHTML = "<html>" + "<body><h1> My Portfolio</h1>" + "<a href = '/'> Go Home</a>" + "</body> </html>";
    
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(myHTML);
}
function display404(url, res){
    var myHTML = "<html>" + "<body><h1> 404 NOT FOUND</h1>" + "<p>the page you were looking for: " + url + "cannot be located</p>" + "</body> </html>";
    
    res.writeHead(404, {"Content-Type": "text/html"});
    res.end(myHTML);
}
