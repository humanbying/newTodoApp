const express = require('express');
const router = express.Router();
//bring in model so i can worth with it
const Todo = require('../models/todo');

//PUT base url /api/todos/3781297391/toggle

router.put('/:id/toggle', (req, res)) => {
//wouldn't it be cool if we had this method?
  Todo.toggle(req.params.id, (err, newTodo) => {
    // find todo by id
    // toggle isComplete
    // save the todo
    // pass the updated todo into the callback
  });

  // Todo.findById(req.params.id, (err, todo) => {
  //   todo.toggle((err, newTodo) => {
  //
  //   })
  // })

})

//base url: /api/todos

router.route('/')
  //get all function
  .get((req, res) => {
    Todo.find({}, (err, todos) => {
      res.status(err ? 400 : 200).send(err || todos);
    });
  })
  .post((req, res) => {
    Todo.create((req.body, (err, newTodo) => {
      res.status(err ? 400 : 200).send(err || newTodo);
    });
  });

//router for single task things
router.route('/:id')
  .get((req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
      res.status(err ? 400 : 200).send(err || todo);
    });
  })
  .delete(req, res) => {
    Todo.findByIdAndRemove( req.params.id, err => {
      res.status(err ? 400 : 200).send(err);
    })
  })
  .put((req, res) => {
    Todo.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, todo) => {
      //with update operations we may want to see the newly created item with the new true
      res.status(err ? 400 : 200).send(err || todo);
    });
  })


module.exports = router;
