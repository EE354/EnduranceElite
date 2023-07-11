import mongoose from "mongoose"

export const Chat = (() => {
    try {
        return mongoose.model(
            "chat",
            new mongoose.Schema(
                {
                    title: {
                        type: String,
                        required: true
                    },
                    messages: {
                        type: Array,
                        default: []
                    },
                    members: {
                        type: Array,
                        default: []
                    },
                    group: String,
                }
            )
        );
    } catch {
        return mongoose.model("chat");
    }
})();