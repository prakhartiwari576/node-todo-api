//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },function(err,client){
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //findOneAnDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // })

  //challenge
  // db.collection('Users').deleteMany({name:'Prakhar Tiwari'}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id:new ObjectID('5ce7d82233d4343214828ff0')
  }).then((result)=>{
    console.log(JSON.stringify(result,undefined,2));
  });



  // client.close();
});
