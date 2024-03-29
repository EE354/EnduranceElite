import mongoose from "mongoose";

export const Session = (() => {
    try {
        return mongoose.model(
            "auth_session",
            new mongoose.Schema(
                {
                    _id: {
                        type: String
                    },
                    user_id: {
                        type: String,
                        required: true
                    },
                    active_expires: {
                        type: Number,
                        required: true
                    },
                    idle_expires: {
                        type: Number,
                        required: true
                    }
                },
                {_id: false}
            )
        );
    } catch (e) {
        return mongoose.model("auth_session");
    }
})();



