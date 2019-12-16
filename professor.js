//NAVJOT SINGH C0744173
var mongodb = require ('mongodb').MongoClient;
var url = "mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err)
{
throw err; // return console.log ('fix the err');
}
console.log("you created professor collections");
var mydatabase=db.db('college');
var mycol=[


{ p_id:1234, Firstname: "Sandeep" ,LastName:"sidhu",email:"sidhu67888@gmail.com",salary:10000},
{p_id:1678, Firstname: "Paramjeet" ,LastName:"kaur",email:"param@gmail.com",salary:12000},
{ p_id:1983,Firstname: "Sumandeep" ,LastName:"Smagh",email:"smaghsuman@gmail.com",salary:11000},
{p_id:1222, Firstname: "Gurmeet" ,LastName:"singh",email:"gurmeetsingh65@gmail.com",salary:8000},
{p_id:1223, Firstname: "Gurjit" ,LastName:"Kaur",email:"gurjitkaur5@gmail.com",salary:10000},
{p_id:1224, Firstname: "Navjot" ,LastName:"singh",email:"navjotsingh@gmail.com",salary:8000},
{p_id:1225, Firstname: "Mandeep" ,LastName:"kaur",email:"mandykaur@gmail.com",salary:10000},
{p_id:1226, Firstname: "Kiran" ,LastName:"singh",email:"kiransingh45@gmail.com",salary:8000}
	

]
mydatabase.collection("professor").insertMany(mycol,function(err,response){
if (err)
throw err;

console.log("you insert data in ur collection");
db.close();
});
});