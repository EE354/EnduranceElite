import { model, schema } from '../db.js';

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

module.exports = model('Event', chatSchema);