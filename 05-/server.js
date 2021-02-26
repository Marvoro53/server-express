// Require dependencies
const http = require('https');
// Set our port to 8080
const PORT= 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server is listening on: http://localhost:" + PORT);
});
  // Capture the url the request is made to
  // When we visit different urls, read and respond with different files
  function handleRequest(req, res){
    // Capture the url the request is made to
    const path = req.url;
    switch (path) {
        case "/":
          return displayRoot(res);
        default:
          return display404(path, res);
        }
      }
    // default to rendering index.html, if none of above cases are hit
    function displayRoot(res){
        const myHTML = "<html>" + "<body><h1>HOME PAGE</h1>" +  "<a href = '/portfolio'>Portfolio</a>"
         + "</body></html>";
         
         res.writeHead(200, {"Content-Type": "text/html"});
         res.end(myHTML);
    }
// Starts our server.
