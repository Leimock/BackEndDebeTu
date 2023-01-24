import * as usersService from '../services/usersService'

async function signIn(req, res) {
    const {email, password} = req.body

    const logger = await usersService.findByEmail(email)
    if (!logger) return res.status(500).json({message: 'Usuario o contraseña incorrectos'})

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    if (logger.password == hash) {

    }
}