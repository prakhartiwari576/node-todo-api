//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },function(err,client){
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID('5ce831e56899ad91892e21d8')
  // },{
  //   $set:{
  //     completed:false
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5ce7d80fb6aa0d25980605e2')
  },{
    $set:{
      name:'Raghav Tiwari'
    },
    $inc:{
      age:-15
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });

  // client.close();
});
