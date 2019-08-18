var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path')
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var port = 8080
var host = "0.0.0.0"
 
// Running Server Details.
app.listen(port, host, function() {
    console.log("Server started.......");
  });
   
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
 
app.post('/thank', urlencodedParser, function (req, res){
  var reply='Your leave application has been submitted';
  res.send(reply);
 });
