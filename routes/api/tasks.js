const express = require('express');
const router = express.Router();

// User model
const Task = require('../../models/task')

//index
router.get('/', (req, res) => {
    Task.find()
    .then(tasks => {
        res.json({messgae: "index", tasks})
    }).catch(err => {
        res.send.json({err})
    })
})

//post
router.post('/', (req, res) => {
    let task= new Task(req.body)
    task.save()
    .then((task) => {
        res.json({task})
    })
})

//delete
router.delete('/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id)
    .then(() => {
        res.json({message: "Delete successfull"})
    })
})

module.exports = router;