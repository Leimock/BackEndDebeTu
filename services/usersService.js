import { User } from "../models/user.js"

const findAll = async () => await User.find()

const save = async (data) => {
    const newUser = new User(data)
    return await newUser.save()
}

export {findAll,save}