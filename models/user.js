import { model, Schema } from "mongoose"
import bcrypt from "bcrypt"

let userSchema = new Schema(
    {
        _id: {type: Schema.ObjectId, auto: true},
        userName: {type: String, required: true, trim: true},
        userEmail: {type: String, required: true, trim: true, lowercase:true, unique: true},
        userPassword: {type: String, required: true, trim: true, select: false, minLength: 4},
    },
    {
        timestamps: true,
        versionKey: false
    }
)

userSchema.pre('save', async function (next) {
    const user = this
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(user.userPassword, salt)
    user.userPassword = hash
    next()
})

const User = model('User', userSchema)

export { User }