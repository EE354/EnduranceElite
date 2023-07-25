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
                    description: {
                        type: String,
                        default: ""
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
