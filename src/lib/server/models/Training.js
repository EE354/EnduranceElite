import mongoose from "mongoose";

export const Training = (() => {
    try {
        const testSchema = new mongoose.Schema({
            question: {
                type: String,
                required: true,
            },
            possibleAnswers: {
                type: [String],
                required: true,
            },
            correctAnswer: {
                type: Number,
                required: true,
            }
        });

        return mongoose.model(
            "training",
            new mongoose.Schema(
                {
                    title: {
                        type: String,
                        required: true,
                    },
                    description: {
                        type: String,
                        required: true,
                    },
                    video: {
                        type: String,
                        required: true,
                    },
                    tests: [testSchema]
                },

            )
        );
    } catch (e) {
        return mongoose.model("auth_session");
    }
})();

