// Pull in required dependencies
let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');

let port = process.env.PORT || 3001;


let app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Set Handlebars as the view engine
const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");


let routes = require('./controllers/burger_controller.js');

app.use('/', routes);

app.listen(port);