//NAVJOT SINGH C0744173
var mongodb = require ('mongodb').MongoClient;
var url = "mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err)
{
throw err; // return console.log ('fix the err');
}
console.log("you created fees collections");
var mydatabase=db.db('college');
var mycol=[


{ recieptNo:1234,tutionfee:"3400",date:"12dec2019",s_id:7543},
{recieptNo:1567,tutionfee:"7700",date:"10dec2019",s_id:7566},
{recieptNo:1890,tutionfee:"9800",date:"22dec2019",s_id:7589},
{recieptNo:9087,tutionfee:"6500",date:"11dec2019",s_id:7509},
{recieptNo:9090,tutionfee:"6000",date:"16dec2019" ,s_id:7545},
{recieptNo:1234,tutionfee:"8500",date:"18dec2019" ,s_id:7545},
{recieptNo:9095,tutionfee:"8000",date:"19dec2019",s_id:7547},
{recieptNo:9099,tutionfee:"6500",date:"20dec2019" ,s_id:7510}
	
	

]
mydatabase.collection("fees").insertMany(mycol,function(err,response){
if (err)
throw err;

console.log("you insert data in ur collection");
db.close();
});
});