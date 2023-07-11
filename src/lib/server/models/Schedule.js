import mongoose from 'mongoose';

export const Schedule =(() => {
    try {
        return mongoose.model(
            "schedule",
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
                    employee: {
                        type: String,
                        required: true
                    }
                }
            )
        );
    } catch {
        return mongoose.model("schedule");
    }
})();
