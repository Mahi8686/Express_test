var express = require('express')
var app = express();
var path=require('path');
var http=require('http');

app.get('/', function (req, res) {
  //res.sendFile('index.html')
  res.sendFile(path.join(__dirname, './public', 'index.html'));
})

/*app.get('/getData', function(req,res){
	console.log('getData called');

})*/

app.get('/getData', function(req,response){
	//console.log("heklkli");
	var options = {
	  "method": "GET",
	  "hostname": "apidev.accuweather.com",
	  "port": null,
	  "path": "/locations/v1/search?q=Bangalore&apikey=hoArfRosT1215",
	  "headers": {
	    "cache-control": "no-cache",
	    "postman-token": "1ad2130c-4d8b-b04e-b70f-c422f665cb61"
	  }
	};
	
	var req = http.request(options, function (res) {
	  var chunks = [];

	  res.on("data", function (chunk) {
	    chunks.push(chunk);
	  });
	  res.on("end", function () {
	   var body = Buffer.concat(chunks).toString();
	    console.log("1");
	  	console.log("2");
	response.send(body);  
	
	    //console.log('Over');
	    //document.getElementById('output_data').innerHtml=body.toString();
	    //return body;
	  });
	});
	 
	req.end();
})



app.use(express.static('public'))

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})