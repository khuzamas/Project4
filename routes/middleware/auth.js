require('dotenv').config();

const jwt = require ('jsonwebtoken')

function auth(req,res,next){
    const token = req.header('x-auth-token');

    // check for token
    if(!token){
        res.status(401).json({message: 'No token! Denied'});
    }

    try {
        //verify token
        const decoded = jwt.verify(token, JWTSECRET)

        // add user from payload
        req.user = decoded
        next()
    } catch(e){
        res.status(400).json({message: 'token in not valid'})
    }

}

module.exports = auth