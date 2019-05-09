const express = require('express');
const router = express.Router();

// User model
const User = require('../../models/user')


// @route GET api/items
// @desc Get all items
// @access Public
router.get('/',(req,res) =>{
    User.find()
    .sort({ date: -1})
    .then(users => res.json(users))
})

// @route POST api/users
// @desc Create a user
// @access Public
router.post('/',(req,res) =>{
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    newUser.save()
    .then(user => res.json(user))
})

// @route Delete api/items
// @desc Delete an item
// @access Public
router.delete('/:id',(req,res) =>{
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true})))
    .catch(err => res.status(404).json({ success: false}))
})


module.exports = router;