import mongose from "mongoose"

export const Image = (() => {
    try {
        return mongose.model(
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
    } catch {
        return mongose.model("image")
    }
})();