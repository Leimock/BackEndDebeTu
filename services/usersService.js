import { User } from "../models/user.js"

const findAll = async () => await User.find()

const findById = async (id) => {
    return await User.findById(id)
}

const save = async (data) => {
    const newUser = new User(data)
    return await newUser.save()
}

const removeAll = async () => {
    return await User.remove({})
}

export {findAll,findById,save,removeAll}