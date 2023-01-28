import * as usersService from '../services/usersService.js'
import {Strategy, ExtractJwt} from "passport-jwt"
import dotenv from "dotenv"
dotenv.config()

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_TOKEN
}

const jwtStrategy = new Strategy(opts, async (payload, done) => {
    try {
        const user = await usersService.findById(payload._id)
        if (user) return done(null, user)
        return done(null, false)
    } catch(error){
        console.error(error)
    }
 })

 export default jwtStrategy