const { model, Schema } = require('db');

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
    allDay: {
        type: Boolean,
        default: false
    },
    location: {
        type: String,
        required: true,
    }
});

module.exports = model('Event', eventSchema);