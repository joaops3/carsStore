import express, { Request, Response, ErrorRequestHandler } from "express"
import path from "path"
import userRoute from "./routes/userRoutes"
import carsRoute from "./routes/carsRoutes"
import cors from "cors"
import dotenv from "dotenv"
import { database } from "./instances/db"


dotenv.config()

const server = express()
server.use(express.static(path.join(__dirname, "../public")))

server.use(express.urlencoded({ extended: true }))
server.use(cors({origin: "http://cars-store.s3-website-us-east-1.amazonaws.com"}))

server.use(express.json())


server.use(userRoute)
server.use(carsRoute)

server.use((req: Request, res: Response) => {
    res.status(404)
    res.json({ error: "page not found" })
})


const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err.status) {
        res.status(err.status)
    } else {
        res.status(400);
    }
    if (err.message) {
        res.json({ error: err.message })
    } else {
        res.json({ error: 'bad request' });
    }

}
server.use(errorHandler)

database
    .sync()
    .then(() => { server.listen(process.env.PORT || 3000) })
    .catch((err) => { console.log(err)})
