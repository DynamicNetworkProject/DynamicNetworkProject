var express = require('express');
var app = express();
var fs = require("fs");

app.use("/", express.static(__dirname + '/public'));

app.get('/test', function  (req, res) {
	console.log('Request to: test.html') ;	
	fs.readFile(__dirname + '/public/test.html', function  (err, html) {
   	   if (err) {
   	   	console.log(err);
   	   };
   	   res.end( html );
	  });
});

app.get('/api/test', function  (req, res) {
	console.log('Request to: api/test') ;
	var json = JSON.stringify({prop : 'value'});
	console.log(json) ;
  	res.end( json );
});

app.get('/api/users', function (req, res) {
   fs.readFile( __dirname + "/public/data/users.json", 'utf8', function (err, data) {    
   	   console.log('Request to: api/users') ;
   	   if (err) {
   	   	console.log(err);
   	   };
   	   var json = JSON.stringify(data);
       res.end( json );
   });
});

app.get('/api/articles', function  (req, res) {
  fs.readFile( __dirname + "/public/data/articles.json", 'utf8', function (err, data) {   
  	   console.log('Request to: api/articles') ;  
  	   if (err) {
   	   	console.log(err);
   	   };
       var json = JSON.stringify(data);
       res.end( json );
   });
});

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);

});