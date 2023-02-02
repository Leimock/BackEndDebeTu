import { Router } from "express"
import passport from "passport"
import * as userController from '../controllers/userController.js'

const userRouter = Router()

// listar todos los usuarios
userRouter.get('/listAll', 
  //passport.authenticate('jwt', {session: false}),  
  userController.findAll)

// listar un usuario a partir de su id
userRouter.get('/me', passport.authenticate('jwt', {session: false}), userController.findMe)

// añadir un nuevo usuarios
userRouter.post('/add', userController.save)

// borrar todos los usuarios
userRouter.delete('/', passport.authenticate('jwt', {session: false}), userController.removeAll)

userRouter.get('/id/:id', userController.findById)

export default userRouter