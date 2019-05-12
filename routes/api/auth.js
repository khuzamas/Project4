require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require ('bcryptjs')
const JWTSECRET = process.env.JWTSECRET
const jwt = require ('jsonwebtoken')

// User model
const User = require('../../models/user')



// @route POST api/auth
// @desc Auth user
// @access Public
router.post('/',(req,res) =>{

    // simple Validation!


    // see if user exists then create a new one
    User.findOne({email : req.body.email})
    .then(user => {
        if (!user){
            return res.status(400).json({message: 'User does not exist'})
        }

        // validate password
        bcrypt.compare(req.body.password, user.password)
        .then(isMatch => {
            if(!isMatch) return res.status(400).json({message: 'invalid credentials'})
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



module.exports = router;