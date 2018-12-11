// Erika Hamilton
// Lab 9
var express = require('express');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));

var path = require("path");
var app = express();
app.get('/', function(req, res) {
   console.log('root called. Returning index.html');
   res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});

app.post('/myPost', function(req, res) {
   console.log('post called. Returning data');
   console.log(req.body.firstname);
   console.log(req.body.lastname);
   res.json({"Full Name: " + req.body.firstname + " " + req.body.lastname});
});
app.use(express.static("public"));
