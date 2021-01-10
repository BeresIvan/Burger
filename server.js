// Create express connection and run node server
let express = require("express");
let exphbs = require("express-handlebars");
let methodOverride = require("method-override");

let PORT = process.env.PORT || 8080;

let app = express();

// Serve static content for the app from the "public" directory in the application directory.
// This is a level of abstraction to hide credentials from user
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

// the main page is always displayed
app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// Norm is to call it "let = routes"
let routes = require("./controllers/burger_controller.js");

// Use express routes defined
app.use("/", routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});