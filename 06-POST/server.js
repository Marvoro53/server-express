const http = require("http");
const fs = require('fs');
const PORT = 8080;

const server= http.createServer(handleRequest);
//500 internal issue
//200 response for succesful HTTP response
function handleRequest(req, res){
    const path= req.url;

    switch (path){
        case '/thanks':
            return renderThankYouPage(req, res);
            default:
            return renderWelcomePage(req, res);
    }
}

function renderWelcomePage(req, res){
    fs.readFile(__dirname + "/index.html", function(err, data){
        if (err){
            res.writeHead(500, { "Content-Type": "text/html"})
            res.end("<html><head><title>Opps</title></head><body><h1>Opps, Something went wrong</h1></body></html>")
        } else {
            res.writeHead(200, { "Content-Type": "text/html"});
            res.end(data);
        }
    })
}

function renderThankYouPage(req, res) {
    var requestData = "";

    var myHTML= 
    "<html><head><tittle>Hello Node</tittle></head><body><h1>I didn't get any data</h1></body></html>"

//on binds request to object, event emitter .emitt fires an event
req.on("data", function(data){
    requestData += data;
    console.log("You just posted some data to the server: \n", requestData);

    myHTML = "<html><head><tittle>Hello Noder</tittle></head><body><h1>Thank you for the data: </h1> <code>" + 
    requestData + "</code>" + "</body></html>";
});

//when request ended
req.on('end', function(){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(myHTML);
})
}
//saving request posted
//starts server
server.listen(PORT, function(){
    console.log('Server is listening on: http://localhost:' + PORT)
});
