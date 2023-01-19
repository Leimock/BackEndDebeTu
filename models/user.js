import { model, Schema } from "mongoose"

let userSchema = new Schema(
    {
        _id: {type: Schema.ObjectId, auto: true},
        userName: {type: String, required: true, trim: true},
        userEmail: {type: String, required: true, trim: true},
        userPassword: {type: String, required: true, trim: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const User = model('User', userSchema)

export { User }