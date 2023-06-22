import mongoose from "mongoose";

export const Group = mongoose.model(
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
            settings: {
                type: Object,
                default: {}
            }
        }
    )
);
