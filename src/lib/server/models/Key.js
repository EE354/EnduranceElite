import mongoose from "mongoose";

export const Key = mongoose.model(
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
        { _id: false }
    )
);