//NAVJOT SINGH C0744173
var mongodb = require ('mongodb').MongoClient;
var url = "mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err)
{
throw err; // return console.log ('fix the err');
}
console.log("you created course collections");
var mydatabase=db.db('college');
var mycol=[


{ cname : "java",cid:4464,credits:4},
{cname : "enterprise technology",cid:4403,credits:3},
{ cname : "webtech",cid:3313,credits:4},
{ cname : "database",cid:2206,credits:6},
{ cname : "webtech2",cid:2215,credits:3},
{ cname : "websecurity",cid:2204,credits:6}


	

]
mydatabase.collection("course").insertMany(mycol,function(err,response){
if (err)
throw err;

console.log("you insert data in ur collection");
db.close();
});
});

