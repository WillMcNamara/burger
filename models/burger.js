var orm = require("../config/orm");


var burger = {
    
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    
    insertOne: function(burger_name, cb){
        orm.insertOne("burgers", "burger_name", burger_name, function(res){
            cb(res);
        });
    },
    
    updateOne: function(burger_name, cb){
        orm.updateOne("burgers", "burger_name", burger_name, "devoured", "true", function(res){
            cb(res);
        });
    },
};

module.exports = burger;