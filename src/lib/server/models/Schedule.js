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
                    employee: {
                        type: String,
                        required: true
                    },
                    description: {
                        type: String,
                        default: ""
                    }
                }
            )
        );
    } catch {
        return mongoose.model("schedule");
    }
})();
