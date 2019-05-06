connection = require("./connection");

var orm = {
    selectAll: function(){
        var query = "SELECT * FROM burgers";
        connection.query(query, function(err, res){
            if (err) throw err;
            console.log(res);
        })
    },
    insertOne: function(burger_name){
        var query = "INSERT INTO burgers (burger_name) VALUES (?);";
        connection.query(query, burger_name, function(err, res){
            if (err) throw err;
            console.log(res);
        })
    },
    updateOne: function(burger_name){
        var query = "UPDATE burgers WHERE burger_name = ? SET devoured = true;";
        connection.query(query, burger_name, function(err, res){
            if (err) throw err;
            console.log(res);
        })
    }
}

module.exports = orm;