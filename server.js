var http = require('http'),
    fs = require('fs');


fs.readFile('index.html', function (err, html) {
	console.log('Inside the function');
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});
        console.log('server started');
        response.write(html);  
        response.end();  
    }).listen(8080);
});