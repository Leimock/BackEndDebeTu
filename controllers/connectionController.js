import * as usersService from '../services/usersService.js'
import * as connectionService from '../services/connectionService.js'

const connectToCreditor = async (req, res) => {
    try {
        const userLoggedDebtor = req.user
        const userCreditorEmail = req.params.email

        const userCreditor = usersService.findByEmail(userCreditorEmail)
        
        if(!userCreditor) req.status(404).json({message: 'No existe el usuario acreedor'})

        const connection = await connectionService.getConnectionfromUsersIds(userCreditor._id, userLoggedDebtor._id)
        if (connection) res.status(409).json({message: 'Error, los usuarios ya están conectados'})

        const newConnection = await connectionService.connectToCreditor(userCreditor._id, userLoggedDebtor._id)

        res.status(200).json(newConnection)

    } catch(err) {
        res.status(500).json({message: 'Error al conectarse con un acreedor: ' + err})
    }
}

const disconnectToCreditor = async (req, res) => {
    try{
        const userLoggedDebtor = req.user
        const userCreditorEmail = req.params.email

        const userCreditor = usersService.findByEmail(userCreditorEmail)
        
        if(!userCreditor) req.status(404).json({message: 'No existe el usuario acreedor'})
        
        const connection = await connectionService.getConnectionfromUsersIds(userCreditor._id, userLoggedDebtor._id)

        if (!connection) res.status(404).json({message: 'No existe la conexion entre esos usuarios'})

        const updatedConnection = await connectionService.disconnectToCreditor(connection._id)

        res.status(200).json(updatedConnection)
    }catch(err) {
        res.status(500).json({message: 'Error al desconectarse de un acreedor' + err})
    }
}

export {connectToCreditor, disconnectToCreditor}