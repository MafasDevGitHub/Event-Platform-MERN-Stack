const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function(next){
    let user = this
    if(user.isModified('password')){
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(user.password,salt)
        user.password = hash
    }
    next()
})

userSchema.statics.emailIsTaken = async function (email) {
    const user = await this.findOne({email})
    return !!user
}

module.exports = mongoose.model('User',userSchema);

