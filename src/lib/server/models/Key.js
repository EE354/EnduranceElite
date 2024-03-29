import mongoose from "mongoose";


export const Session = (() => {
    try {
        return mongoose.model(
            "auth_key",
            new mongoose.Schema(
                {
                    _id: {
                        type: String
                    },
                    user_id: {
                        type: String,
                        required: true
                    },
                    hashed_password: String,
                    primary_key: {
                        type: Boolean,
                        required: true
                    },
                    expires: Number
                },
                {_id: false}
            )
        );
    } catch (e) {
        return mongoose.model("auth_key");
    }
})();
