import * as usersService from '../services/usersService.js'

const findMe = async (req, res) => {
    try {
        const email = req.body.email
        const user = await usersService.findByEmail(email)
        res.status(200).json(user)
    }catch(err) {
        res.status(500).json({message: 'Error al obtener el usuario: ' + err})
    }
}

const findAll = async (req, res) => {
    try {
        const users = await usersService.findAll()
        res.status(200).json(users)
    } catch(err) {
        res.status(500).json({message: 'Error al obtener los usuarios: ' + err})
    }
}

const findById = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await usersService.findById(userId)
        res.status(200).json(user)
    } catch(err) {
        res.status(500).json({message: 'Error al obtener el usuario: ' + err})
    }
}

const save = async (req, res) => {
    try{
        const data = req.body
        console.log(data)
        const userSave = await usersService.save(data)
        console.log(userSave)
        res.status(200).json(userSave)

    }catch(err) {
        res.status(500).json({message: 'Error al crear el nuevo usuario: ' + err})
    }
}

const removeAll = async (req, res) => {
    try {
        await usersService.removeAll()
        res.status(200).json({message: 'Usuarios borrados'})
    }catch(err) {
        res.status(500).json({message: 'Error al borrar los usuarios: ' + err})
    }
}


export {findAll, findById, save, removeAll, findMe}