import { model, Schema } from "mongoose"
import bcrypt from "bcrypt"

let ruleSchema = new Schema (
    {
        _id: {type: Schema.ObjectId, auto: true},
        text: String,
        // idUser: {type: Schema.ObjectID, ref: 'User'}
    },
    {
        timestamps: true,
        versionKey: false
    }
)

let userSchema = new Schema(
    {
        _id: {type: Schema.ObjectId, auto: true},
        name: {type: String, required: true, trim: true},
        email: {type: String, required: true, trim: true, lowercase:true, unique:true},
        password: {type: String, required: true, trim: true, select: false, minLength: 4},
        rules: [ruleSchema]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

userSchema.pre('save', async function (next) {
    const user = this
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash
    next()
})

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const User = model('User', userSchema)

export { User }