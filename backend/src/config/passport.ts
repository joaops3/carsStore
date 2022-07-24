import passport from "passport"
import dotenv from "dotenv"
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt"
import { User } from "../models/User"

dotenv.config()

export const notAuthorizedJson = { status: 401, message: "not authorized" }

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

passport.use(new JWTStrategy(options, async (payload, done) => {
    const user = await User.findByPk(payload.id)
    if (!user) {
        return done(notAuthorizedJson, false)
    }
    return done(null, user)
}))

export default passport