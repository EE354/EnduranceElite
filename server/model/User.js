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
    },
    classes: {
        type: [String],
        default: []
    },
    groups: {
        type: [String],
        default: []
    },
    dependant: {
        isDependant: {
            type: Boolean,
            default: false
        },
        dependants: {
            type: [String],
            default: []
        }
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    role: {
        type: Number,
        default: 0
    }
});

userSchema.methods.getAge = () => {
    let today = new Date();
    let birthDate = new Date(this.dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) age--;

    return age;
}

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
