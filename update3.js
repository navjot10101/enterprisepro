//NAVJOT SINGH C0744173
//course collection update
var mongodb = require ('mongodb').MongoClient;
var url = "mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err)
{
throw err; // return console.log ('fix the err');
}

var mydatabase=db.db('college');
var query4 = {cname : "enterprise technology"};
var data4 = {$set: {cname : "mobile development"}};


mydatabase.collection("course").updateOne(query4,data4,function(err,response){
if (err)
throw err;

console.log("you update data in ur collection");
db.close();
});

//professor collection update
var query5 = {p_id:1226};
var data5 = {$set: {salary:10000}};


mydatabase.collection("professor").updateOne(query5,data5,function(err,response){
if (err)
throw err;

console.log("you update data in ur collection");
db.close();
});

//fees collection update
var query6 = {tutionfee:"3400"};
var data6 = {$set: {date:"5jan2020"}};


mydatabase.collection("fees").updateOne(query6,data6,function(err,response){
if (err)
throw err;

console.log("you update data in ur collection");
db.close();
});
});

