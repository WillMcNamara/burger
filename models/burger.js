var orm = require("../config/orm");


var burger = {
    
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    
    insertOne: function(burger_id, cb){
        orm.insertOne("burgers", "id", burger_id, function(res){
            cb(res);
        });
    },
    
    updateOne: function(burger_id, cb){
        orm.updateOne("burgers", "id", burger_id, "devoured", "true", function(res){
            cb(res);
        });
    },
};

module.exports = burger;