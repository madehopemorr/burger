// import(require) connection.js into orm.js
var connection = require("./connection.js");

// create methods that will execute the necessary mySQL commands in the controllers.

// *Will need these methods to retrieve and store data in db: selectAll(), insertOne(), updateOne().

// export the ORM object in module.exports 
module.exports = orm;