import { Router } from "express";
import * as userController from "../controller/userController"
import * as transactionsController from "../controller/transactionsController"
import { privateRoute } from "../middlewares/privateRoute";


const route = Router()


route.get("/user", userController.getUsers)
route.post("/cadastro", userController.createUser)
route.post("/login", userController.login )

route.get("/user/:id", privateRoute, userController.getUsersId)
route.put("/user/:id", privateRoute, userController.updateUser)
route.delete("/user/:id", privateRoute, userController.deleteUser)

route.post("/search/:item", transactionsController.searchItem)
route.get("/user/:id/seeowned",  transactionsController.seeowned)
route.post("/user/:id/registercard", transactionsController.registerCard )
route.post("/user/:id/buy/:idcar",  transactionsController.buyCar)
route.delete("/user/:id/sell/:idcar", transactionsController.sellCar)




export default route