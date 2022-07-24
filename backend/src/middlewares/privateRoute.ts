import { Request, Response, NextFunction } from "express"
import passport, { notAuthorizedJson } from "../config/passport"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
dotenv.config()

export const privateRoute = async (req: Request, res: Response, next: NextFunction) => {
    const authFunction = passport.authenticate("jwt", (err, user) => {
        req.user = user
        if (user) {
            next()
        } else {
            next(notAuthorizedJson)
        }
    })
    authFunction(req, res, next)
}


export const generateToken = async (data: object) => {
    return jwt.sign(data, process.env.JWT_SECRET as string, { expiresIn: "24h" })
}