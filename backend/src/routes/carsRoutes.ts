import { Router } from "express";
import * as userController from "../controller/userController"
import { privateRoute } from "../middlewares/privateRoute";


const route = Router()


route.get("/car", userController.getUsers)
route.post("/cadastrocar", userController.createUser)
route.get("/car/:id", userController.getUsersId)
route.put("/car/:id", userController.updateUser)
route.delete("/car/:id", userController.deleteUser)


export default route