const { model, Schema } = require('mongoose');

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dateTime: {
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        }
    },
    location: {
        type: String,
        required: true,
    }
});

module.exports = model('Event', eventSchema);