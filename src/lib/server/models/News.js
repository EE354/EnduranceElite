import mongoose from "mongoose";

export const News = (() => {
    try {
        return mongoose.model(
            "news",
            new mongoose.Schema(
                {
                    Title: {
                        type: String,
                        required: true,
                    },
                    Content: {
                        type: String,
                        required: true,
                    },
                    date: {
                        type: Date,
                        required: true,
                    },
                    imageIds: {
                        type: [String],
                    }
                }
            )
        );
    } catch (e) {
        return mongoose.model("news");
    }
})();