import mongoose from "mongoose";

export const User = (() => {
    try {

        return mongoose.model(
        "auth_user",
        new mongoose.Schema(
            {
                _id: {
                    type: String
                },
                email: {
                    type: String,
                    required: true,
                },
                name: {
                    first: {
                        type: String,
                        required: true,
                    },
                    last: {
                        type: String,
                        required: true,
                    },
                },
                training: {
                  type: [String],
                    default: []
                },
                groups: {
                    type: [String],
                    default: []
                },
                dateOfBirth: {
                    type: String,
                    required: true,
                },
                emailVerified: {
                    type: Boolean,
                    default: true
                },
                roleId: {
                    type: Number,
                    default: 1
                }
            },
            { _id: false, collection: 'users'}
        ));

    } catch (e) {
        return mongoose.model("auth_user");
    }
})();
