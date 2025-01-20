const jwt = require('jsonwebtoken');
require('dotenv').config();

const genareteToken = async (user) => {
    try {
        const email = user.email;
        const username = user.username;
        const id = user._id;
        payload = { username, email, id };
        const token = jwt.sign(payload, process.env.JWT_SECRATE_KEY, { expiresIn: '1d' });
        return token;
    }
    catch (error) {
        console.log("error in token generate");
        return { error: "error in token generate", error }
    }
}

const authMiddlewareVerify = async (req, res, next) => {
    try{
        const authHeader = req.headers.authorization;
        if(!authHeader){
            return res.status(401).json({message:"Unauthorized no token provided"})
        }

        const token = authHeader.split(' ')[1]
        if(!token){
            return res.status(401).json({message:"Unauthorized invalid token format"})
        }

        //verify token

        jwt.verify(token, process.env.JWT_SECRATE_KEY, (err, decoded) => {
            if(err){
                return res.status(401).json({message: "Unauthorized: Invalid or expired token"});
            }

            req.user = decoded;
            next();
        })
    }
    catch(error){
        console.error("Error in authMiddleware:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    genareteToken,
    authMiddlewareVerify
}