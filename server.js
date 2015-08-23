var express = require('express'); // express module
var app = express(); // defining our app as an instance of express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./app/config/config');
var environmentSettings = config.config();

mongoose.connect(environmentSettings.db)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var apiRouter = require('./app/config/routes')
app.use('/api', apiRouter);

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
	response.sendfile('./public/views/index.html');
});

var port = process.env.PORT || 7000

app.listen(port);

console.log('Server is running on port', port);
