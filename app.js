var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())

app.get('/', function(req,res){
    res.send("sample-node-api is up and running now");
});

app.get('/api', function(req,res){
    getApiRequest(req,res);
});

function getApiRequest(req,res){
    res.send({
        msg:"Hello world"
    });
}

var port = 8082;
app.listen(port, function(){
    console.log("Server started on port  "+port);
});