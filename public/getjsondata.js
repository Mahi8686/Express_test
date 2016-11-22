var start= function(){

console.log("start function is called");

$.ajax({
  "url":"/getData",
  "method":"GET",
  "success": function(data){
    console.log(data);
    $("#output_data").innerHtml = data;
  },
  "error": function(){
    console.log("err");
  }
});


/*

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
    var body = Buffer.concat(chunks);
    console.log(body.toString());
    console.log('Over');
  });
});

req.end();


//$(output_data).innerHtml= body.toString();
*/
};

//start();*/