var express = require("express");
var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js")

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
});