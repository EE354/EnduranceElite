import mongose from "mongoose"

export const Image = mongose.model(
    "image",
    new mongose.Schema(
        {
            fileName: {
                type: String,
                required: true,
            },
            file: {
                type: buffer,
                contentType: String,
            },
            uploadTime: {
                type: Date,
                default: Date.now
            }
        }
    )
)