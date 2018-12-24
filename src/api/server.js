const routes = require("./routes/index.js");

var express    = require('express');        
var app        = express();                 

app.use(express.json());

var port = process.env.PORT || 8080;        

app.use('/', routes);

/*var http = require('http');
app.server = http.createServer(app);

app.server.listen(port); */
app.server = app.listen(port,  function () {
  console.log('Server started and listening port %d', port);
});

module.exports = app
