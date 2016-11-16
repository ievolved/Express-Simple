
var http = require("http"),
  path = require("path"),
  urlPath = require("url"),
  helpers = require("./request-helpers.js"),

  port = 8100,
  ip = "127.0.0.1",

  express = require("express"),
  bodyParser = require("body-parser"),

  app = express();

// Do the magic
//
{
  app.listen(port, function () {
    console.log("Application listening on http://" + ip + ":" + port);
  });

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static("web"));

  app.post("/processCollected", handleCollectPost);

  function handleCollectPost(request, response) {
    console.log("firstName is: " + request.body.firstname);
    console.log("lastName is: " + request.body.lastname);
    console.log("email is: " + request.body.email);

    var whichUrl = "/awesome.html";
    helpers.sendRedirect(response, whichUrl, null);
  }
}