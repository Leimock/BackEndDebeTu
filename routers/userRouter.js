import { Router } from "express"
import * as userController from '../controllers/userController.js'

const userRouter = Router()

// listar todos los mensajes
userRouter.get('/', userController.findAll)

// añadir un nuevo mensaje
userRouter.post('/', userController.save)

export default userRouter