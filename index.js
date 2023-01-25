import express from "express"
import mongoose from "mongoose"
import * as dotenv from 'dotenv'
import morgan from "morgan"
import messageRouter from "./routers/messageRouter.js"
import cors from 'cors'
import userRouter from "./routers/userRouter.js"
import authRouter from "./routers/authRouter.js"

dotenv.config()
const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cors())

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.status(200).send('Bienvenido al API de debeTu')
})

app.use('/message', messageRouter)
app.use('/user', userRouter)
app.use('/auth', authRouter)

async function main() {
    mongoose.set('strictQuery', true)
    await mongoose.connect(process.env.URL_DB)
    await app.listen(process.env.SERVER_PORT)
    console.log('Servidor y base de datos encendidos')
}
main().catch(error => 
    console.error('Fallo al arrancar el servidor ' + error)
)