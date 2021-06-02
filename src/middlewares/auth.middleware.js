const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../conf');

module.exports = function (req,res,next) {
    let token = req.headers['authorization'];
    if(!token){
        let error = new Error();
        error.status = 400;
        error.message = "Token was not send";
        throw error;
    }
    jwt.verify(token, JWT_SECRET , (err, decodedToken) => {
        if(err){
            let error = new Error();
            error.status = 400;
            error.message = "Token is not valid";
            throw err;
        }
        req.user = decodedToken.user;
        next();
    });
}