var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());


var barry = {
        routename: "barry",
        name:"Barry Allen",
        role: "Hero",
        superPower: "Super Speed"
};

var cisco = {
        routename: "cisco",
        name: "Cisco Ramon",
        role: "Tech guy",
        superPower: "Intelligence"
};

var eobard = {
        routename: "eobard",
        name: "Eobard Thawne",
        role: "Reverse Flash",
        superPower: "Super Speed"
};

var iris = {
        routename: "iris",
        name: "Iris West",
        role: "Girlfriend",
        superPower: "Support"
};
//Send a json as an object
app.get("/", function(req, res){
    res.send(" Welcome to The Flash page")
    
    app.get("/barry", function(req, res){
        res.json(barry);

    })

    app.get("/cisco", function(req, res){
        res.json(cisco);
        
    })

    app.get("/eobard", function(req, res){
        res.json(eobard);
        
    })

    app.get("/iris", function(req, res){
        res.json(iris)
    })
})


  app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT)
});
