import * as usersService from '../services/usersService.js'
import jwt from 'jsonwebtoken'

async function signIn(req, res) {
    const {email, password} = req.body

    const logger = await usersService.findByEmail(email)
    if (!logger) return res.status(500).json({message: 'Usuario o contraseña incorrectos'})

    const validPAssword = await logger.comparePassword(password)

    if (!validPAssword) {
        return res.status(500).json({message: 'Usuario o contraseña incorrectos'})
    }

    const token = jwt.sign({
        ey: "olvidonaaa",
        _id: logger._id,
        email: logger.email,
        exp: Math.floor(Date.now()/1000) + 60 * 60 * 300
    }, process.env.SECRET_TOKEN)

    res.status(200).json({token})
}

async function showData(req, res) {
    const token = req.header.Authorization
    const email = req.body.email

    const logger = await usersService.findByEmail(email)
    if (!logger) return res.status(500).json({message: 'Usuario o contraseña incorrectos'})

    const validToken = jwt.sign({
        ey: "olvidonaaa",
        _id: logger._id,
        email: logger.email,
        exp: Math.floor(Date.now()/1000) + 60 * 60 * 300
    }, process.env.SECRET_TOKEN)

    if (token != validToken) return res.status(500).json({message: 'Token incorrecto'})
    
    res.status(200).json({email: logger.email, name: logger.name})

}

export {signIn, showData}