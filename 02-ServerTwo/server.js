// We require/import the HTTP module
var http = require("http");

// =====================================================================

// Then define the ports we want to listen to
const PORT = 7000;
const PORTTWO = 7500;

// =====================================================================

// We need two different functions to handle requests, one for each server.
function handleRequestOne(request, response){
    console.log(`Request Url. requested ${request.url}`)
    //Send the string to client when user visits port
    response.end("It works! Path Hit: " + request.url)
    }
  
  function handleRequestTwo(request, response) {
    console.log(`Request Url. requested ${request.url}`)
    response.end("You are goated bro!");
  }

// =====================================================================

// Create our servers
const server = http.createServer(handleRequestOne);
const serverTwo = http.createServer(handleRequestTwo);

// =====================================================================

// Starting our servers
server.listen(PORT, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Check out server at: http://localhost:" + PORT);
});

serverTwo.listen(PORTTWO, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Your server is at: http://localhost:" + PORTTWO);
});