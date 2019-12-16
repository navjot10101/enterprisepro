
//NAVJOT SINGH C0744173
//delete query for course collection
var mongodb = require ('mongodb').MongoClient;
var url = "mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err)
{
throw err; // return console.log ('fix the err');
}

var mydatabase=db.db('college');
var deleteData3 = {cname : "database"};


mydatabase.collection("course").deleteOne(deleteData3,function(err,response){
if (err)
throw err;

console.log("you delete data in ur collection");
db.close();
});
//delete query for professor collection
var deleteData4 = {email:"param@gmail.com"};


mydatabase.collection("professor").deleteOne(deleteData4,function(err,response){
if (err)
throw err;

console.log("you delete data in ur collection");
db.close();
});
//delete query for fees collection
var deleteData5 = {tutionfee:"6500"};


mydatabase.collection("fees").deleteMany(deleteData5,function(err,response){
if (err)
throw err;

console.log("you delete data in ur collection");
db.close();
});
});