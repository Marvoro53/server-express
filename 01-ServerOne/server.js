// Require/import the HTTP module
const http= require("http");
// Define a port to listen for incoming requests
const PORT= 8080;
// Create a generic function to handle requests and responses
// Pass the handleRequest function to empower it with functionality.
function handleRequest(request, response){
count++
console.log(`Request ${count}.Url. requested ${request.url}`)
//Send the string to client when user visits port
response.end("It works! Path Hit: " + request.url)
}
// Use the Node HTTP package to create our server.
const server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function(){
    console.log("Server is running on: http://localhost: " + PORT);
});
  // Log (server-side) when our server has started
