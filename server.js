// Pull in required dependencies
let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');

let port = process.env.PORT || 8080;


let app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Set Handlebars as the view engine
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


let routes = require('./controllers/burger_controller.js');

app.use('/', routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });