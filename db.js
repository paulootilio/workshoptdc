var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost/workshoptdc")
            .then(conn => global.conn = conn.db("workshoptdc"))
            .catch(err => console.log(err))
 
module.exports = { findAll, insert , findOne, update, deleteOne }

function findAll(callback){  
    global.conn.collection("customers").find({}).toArray(callback);
}

//inserir 
function insert(customer, callback){
    global.conn.collection("customers").insert(customer, callback);
}

//retorna um objeto pelo id
var ObjectId = require("mongodb").ObjectId;
function findOne(id, callback){  
    global.conn.collection("customers").find(new ObjectId(id)).toArray(callback);
}

function update(id, customer, callback){
    global.conn.collection("customers").update({_id:new ObjectId(id)}, customer, callback);
}

function deleteOne(id, callback){
    global.conn.collection("customers").deleteOne({_id: new ObjectId(id)}, callback);
}
 