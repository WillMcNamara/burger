connection = require("./connection");

var orm = {
    selectAll: function(table, cb){
        var query = "SELECT * FROM ?";
        connection.query(query, function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        })
    },
    insertOne: function(table, col, val, cb){
        var query = "INSERT INTO ? (?) VALUES (?);";
        connection.query(query, [table, col, val], function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        })
    },
    updateOne: function(table, col, colVal, setCol, setVal, cb){
        var query = "UPDATE ? WHERE ? = ? SET ? = ?;";
        connection.query(query, [table, col, colVal, setCol, setVal], function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        })
    }
}

module.exports = orm;