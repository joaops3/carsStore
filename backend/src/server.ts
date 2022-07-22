import express, {Request, Response, ErrorRequestHandler} from "express"
import path from "path"
import route from "./route/routes"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const server = express()
server.use(express.static(path.join(__dirname, "../public")))
server.use(express.urlencoded({extended: true}))
server.use(cors())


server.use(route)

server.use((req: Request, res: Response) => {
    res.status(404)
    res.json({error: "page not found"})
})


const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400);
    res.json({ error: 'bad request' });
}
server.use(errorHandler)

server.listen(process.env.PORT)