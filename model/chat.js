const { model, Schema } = require('mongoose');

const chatSchema = new Schema({
    participants: {
        type: Array,
        required: true,
    },
    messages: {
        type: Array,
        default: []
    }
});

module.exports = model('Event', eventSchema);