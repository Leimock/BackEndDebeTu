import * as messageService from '../services/messagesService.js'

const findAll = async (req, res) => {
    try {
        const messages = await messageService.findAll()
        res.status(200).json(messages)
    } catch(err) {
        res.status(500).json({message: 'Error al obtener los mensajes: ' + err})
    }
}

const save = async (req, res) => {
    try{
        const data = req.body
        const messageSave = await messageService.save(data)
        res.status(200).json(messageSave)
    }catch(err) {
        res.status(500).json({message: 'Error al crear el nuevo mensaje.' + err})
    }
}

export {findAll, save}