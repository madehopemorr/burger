// import(require) connection.js into orm.js
var connection = require("./connection.js");

// create methods that will execute the necessary mySQL commands in the controllers.
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  function objToSql(ob) {
    var arr = [];
  
   
    for (var key in ob) {
      var value = ob[key];
     
      if (Object.hasOwnProperty.call(ob, key)) {

        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        
        arr.push(key + "=" + value);
      }
    }
  
    
    return arr.toString();
  }
// *Will need these methods to retrieve and store data in db: selectAll(), insertOne(), updateOne().
// Object for all our SQL statement functions.
var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function(table, objColVals, condition, cb) {
      console.log("orm", table, objColVals, condition)
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // deleteOne: function(table, condition, cb) {
    //   var queryString = "DELETE FROM " + table;
    //   queryString += " WHERE ";
    //   queryString += condition;
  
    //   connection.query(queryString, function(err, result) {
    //     if (err) {
    //       throw err;
    //     }
  
    //     cb(result);
    //   });
    // }
  };
  
// export the ORM object in module.exports 
module.exports = orm;