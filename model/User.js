const {model, Schema} = require('mongoose');
const crypto = require('crypto');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        first: {
            type: String,
            required: true,
        },
        last: {
            type: String,
            required: true,
        },
    },
    password: {
        hash: String,
        salt: String
    }
});

userSchema.methods.setPassword = function (password)  {
    //create a unique salt for the user
    this.password.salt = crypto.randomBytes(16).toString('hex');

    //hash the password with the salt
    this.password.hash = crypto.pbkdf2Sync(password, this.password.salt, 1000, 64, `sha512`).toString(`hex`);
};

userSchema.methods.checkPassword = function (password) {
    let checkHash = crypto.pbkdf2Sync(password, this.password.salt, 1000, 64, `sha512`).toString(`hex`);
    return this.password.hash === checkHash;
}

module.exports = model('User', userSchema);