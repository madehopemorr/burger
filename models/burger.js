//import orm.js into burger.js
var orm = require("../config/orm.js");
//create code to call ORM functions using burger specific input for the ORM.
var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    create: function(name, cb) {
        orm.insertOne("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },

    update: function(id, cb) {
        //var condition = "id=" + id;
        console.log("burger update", id)
        orm.updateOne("burgers", {
            devoured: true
        }, id, cb);
    }
};
//export at end of this file
module.exports = burger;