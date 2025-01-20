const User = require('../models/User.models');
const userService = require('../services/User.services')

const Controller = {
    signup: async (req, res) => {
        try {
            const { username, email, password } = req.body;
            const newUser = await userService.signup(username, email, password);
            if (newUser.error) {
                return res.status(newUser.statuscode || 500).json({ error: newUser.error })
            }
            res.status(201).json({ newUser })
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ "error": "error in sign up controller" })
        }
    },

    signin: async (req,res) => {
        try{
            const {email, password} = req.body;
            const user = await userService.signin(email, password);
            if(user.error){
                return res.status(user.statuscode || 500).json({error:user.error})
            }
            res.status(201).json({user})
        }
        catch(error){
            console.log(error);
            return res.status(500).json({ "error": "error in sign in controller" })
        }
    }
}

module.exports = Controller