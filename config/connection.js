//setup code to connect node to mySQL
var mySql = require("mysql");

var connection = mySql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Hopers2018",
    database: "burgers_db"
});


//export connection
module.exports = connection;