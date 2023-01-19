import * as usersService from '../services/usersService.js'

const findAll = async (req, res) => {
    try {
        const users = await usersService.findAll()
        res.status(200).json(users)
    } catch(err) {
        res.status(500).json({user: 'Error al obtener los mensajes: ' + err})
    }
}

const save = async (req, res) => {
    try{
        const data = req.body
        const usersSave = await usersService.save(data)
        res.status(200).json(usersSave)
    }catch(err) {
        res.status(500).json({user: 'Error al crear el nuevo mensaje.' + err})
    }
}

export {findAll, save}