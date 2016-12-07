
//let http = require("http");
let path = require("path");
let helpers = require("./request-helpers.js");

let port = 8100;
let ip = "127.0.0.1";

let express = require("express");
let bodyParser = require("body-parser");

let app = express();

// Do the magic
//
{
  app.listen(port, () => {
    console.log(`Application listening on http://${ip}:${port}/`);
  });

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static("web"));

  app.post("/processCollected", handleCollectPost);

  function handleCollectPost(request, response) {
    console.log(`firstName is: ${request.body.firstname}`);
    console.log(`lastName is: ${request.body.lastname}`);
    console.log(`email is ${request.body.email}`);

    let whichUrl = "/awesome.html";
    helpers.sendRedirect(response, whichUrl, null);
  }
}