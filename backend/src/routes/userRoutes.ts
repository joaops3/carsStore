import { Router } from "express";
import * as userController from "../controller/userController"
import { privateRoute } from "../middlewares/privateRoute";


const route = Router()


route.get("/user", userController.getUsers)
route.post("/cadastro", userController.createUser)
route.post("/login", userController.login )
route.get("/user/:id", privateRoute, userController.getUsersId)
route.put("/user/:id", privateRoute, userController.updateUser)
route.delete("/user/:id", privateRoute, userController.deleteUser)

route.get("user/:id/buy")
route.get("user/:id/seeallcars")
route.get("user/:id/sell")


export default route