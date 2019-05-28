const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ced6958834b7f3d80221bf9';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('todos',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Unable to find that ID');
//   }
//   console.log('Todo by ID',todo);
// }).catch((err)=>{
//   console.log(err);
// })

var id = '5ceadcd98095cc364c86a3bd';

User.findById(id).then((user)=>{
  if(!user){
    return console.log('Unable to find that User');
  }
  console.log(JSON.stringify(user,undefined,2));
},(err)=>{
  console.log(err);
})
