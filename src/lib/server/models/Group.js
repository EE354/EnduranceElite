const { model, Schema } = require('db');


const groupSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    age: {
        minAge: {
            type: Number,
            required: true
        },
        maxAge: {
            type: Number,
            required: true
        }
    },
    capacity: {
        type: Number,
        required: true
    }
});

module.exports = model('Group', groupSchema);