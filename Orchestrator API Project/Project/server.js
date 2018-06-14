var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var port = process.env.PORT || 8081;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname+"/public/html/index.html");

});

app.listen(port,function(){
  console.log("Server listening to port 8081");
});
