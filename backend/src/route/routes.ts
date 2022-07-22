import { Router } from "express";
import * as userController from "../controller/userController"


const route = Router()

route.use("/", userController.ping)
route.get("/user", userController.getUsers)
route.get("/user/:id", userController.getUsersId)
route.put("/user/:id", userController.updateUser)
route.delete("/user/:id", userController.deleteUser)



export default route