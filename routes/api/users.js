require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require ('bcryptjs')
const JWTSECRET = process.env.JWTSECRET
const jwt = require ('jsonwebtoken')

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
// @desc Create a new user
// @access Public
router.post('/',(req,res) =>{

    // simple Validation!


    // see if user exists then create a new one
    User.findOne({email : req.body.email})
    .then(user => {
        if (user){
            return res.status(400).json({message: 'User already exists'})
        }

        const newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        })

        // encrypt password and save the new user
        bcrypt.genSalt(10, (err,salt) => {
            bcrypt.hash(newUser.password, salt, (err,hash) => {
                if(err){
                    throw err;
                }
                newUser.password = hash;
                newUser.save()
                .then(user => {
                    jwt.sign(
                        {id: user.id},
                        JWTSECRET,
                        {expiresIn: 3600},
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user
                            })
                        }
                    )
                })
            })
        })
        // return jsonwebtoken

    })

    

    
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