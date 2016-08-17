const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: { type :String, required: true },
  isComplete:{ type: Boolean, required: true, default: false },
  //Data.now() is not invoked () because it will have a default time of whne server started
  createdAt: { type: Date, require: true, default: Date.now }
});

todoSchema.statics.toggle = function(id, cb) {
  //this === Todo model

  //pulling todo out of database.
  //we need save in order to change the database
  this.findById(id, (err, todo) =>{
    if(err) return cb(err);

    todo.isComplete = !todo.isComplete;

    // let saveCb = (err, savedTodo) => {
    //   cb(err, savedTodo);
    // };
    todo.save(cb);
  })
};


const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
