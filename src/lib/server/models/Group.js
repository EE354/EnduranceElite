import mongoose from "mongoose";

export const Group = (() => {
    try {
        return mongoose.model(
            "group",
            new mongoose.Schema(
                {
                    name: {
                        type: String,
                        required: true
                    },
                    description: {
                        type: String,
                        default: ""
                    },
                    members: {
                        type: [String],
                        default: []
                    }
                }
            )
        );
    } catch {
        return mongoose.model("group");
    }
})();
