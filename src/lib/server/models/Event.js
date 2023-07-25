import mongoose from 'mongoose';

export const Event =(() => {
    try {
        return mongoose.model(
            "event",
            new mongoose.Schema(
                {
                    timeStamp: {
                        start: {
                            type: Date,
                            required: true
                        },
                        end: {
                            type: Date,
                            required: true
                        }
                    },
                    name: {
                        type: String,
                        required: true
                    },
                    description: {
                        type: String,
                        default: ""
                    },
                    location: {
                        type: String,
                        default: "Endurance Elite Gymnastics & Dance"
                    },
                    group: {
                        type: String,
                        default: ""
                    }
                }
            )
        );
    } catch {
        return mongoose.model("event");
    }
})();
