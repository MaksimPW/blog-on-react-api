var express = require('express');
var application = express();

var path = require('path');

var cors = require('cors');
var posts = require('./data').posts;

application.use(cors());

application.get('/', function(req, res) {
  res.json(posts);
});

application.get('/assets/:image', function(req, res) {
  var imageName = req.params.image;

  res.sendFile(path.join(__dirname + '/img/' + imageName));
});

var port = 3031;
application.listen(port, function() {
  console.log("Server on " + port);
});
