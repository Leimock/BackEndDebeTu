import { Router } from "express"
import * as userController from '../controllers/userController.js'

const userRouter = Router()

// listar todos los usuarios
userRouter.get('/', userController.findAll)

// listar un usuario a partir de su id
userRouter.get('/:id', userController.findById)

// añadir un nuevo usuarios
userRouter.post('/', userController.save)

// borrar todos los usuarios
userRouter.delete('/', userController.removeAll)

export default userRouter