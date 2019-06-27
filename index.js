//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
    var baseUrl = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
    var endUrl = baseUrl + crypto + fiat;

  request(endUrl, function(error, response, body){
      
  var data = JSON.parse(body);
  var price = data.last;
  var liveDate = data.display_timestamp;   //BITCONEEEEEEEEEEEEEEECT

  res.write("<p>" + liveDate + "</p>");

  res.write("<h1>The Current Price of 1 " + crypto + " is " + price + " " + fiat + "</h1>");

  res.send();
      

  });

  //var  (req.body.crypto);
});

app.listen(3000, function() {
  console.log("Server is BIIIIIIIIG on port 3000");
});
