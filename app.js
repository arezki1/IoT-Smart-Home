
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');




app.get('/', function(req, res) {
    res.render('pages/graph1');
});
app.get('/example', function(req, res) {
    res.render('pages/example');
});
app.get('/data', function(req, res) {
    res.render('pages/data');
});


		
app.listen(3002,function(){
  console.log("Chat server listening port 3002");

});


