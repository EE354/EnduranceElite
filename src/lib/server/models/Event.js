import mongoose from 'mongoose';

export const Event = mongoose.model("event",
    new mongoose.Schema({
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
        }
    )
);