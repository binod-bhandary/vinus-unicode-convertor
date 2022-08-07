var express = require('express'),
  path = require('path')
  app = express(),
  port = process.env.PORT || 3000,
  // mongoose = require('mongoose'),
  // Home = require('./api/models/home'), //created model loading here
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, 'index.html')
  bodyParser = require('body-parser');
  
  // mongoose instance connection url connection
  // mongoose.Promise = global.Promise;
  // mongoose.connect('mongodb://localhost/Tododb'); 

app.use(express.static(DIST_DIR))
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE)
})


var routes = require('./server/routes/homeRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('english to nepali unicode RESTful API server started on: ' + port);