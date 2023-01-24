import { model, Schema } from "mongoose"

let debtSchema = new Schema (
    {
        _id: {type: Schema.ObjectId, auto: true},
        concept: String,
        amount: Number,
        isPaid: Boolean,
        // connection: {type: Schema.ObjectId, ref: "Connection"}
    },
    {
        timestamps: true,
        versionKey: false
    }
)

let connectionSchema = new Schema(
    {
        _id: {type: Schema.ObjectId, auto: true},
        creditor: {type: Schema.ObjectId, ref: 'User'},
        debtor: {type: Schema.ObjectId, ref: 'User'},
        debts: [debtSchema]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Connection = model('Connection', connectionSchema)

export { Connection }