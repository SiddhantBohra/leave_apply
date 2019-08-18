var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path')
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var host = "0.0.0.0"
var port = 8080
 
// Running Server Details.
var server = app.listen(host,port,  () =>{
  console.log("Example app listening at %s:%s Port", host, port)
}).catch(err =>{
    console.log("error connecting to server",error)
})
 
 
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
 
app.post('/thank', urlencodedParser, function (req, res){
  var reply='Your leave application has been submitted';
  res.send(reply);
 });
