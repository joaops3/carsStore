import { Router } from "express";
import * as carsController from "../controller/carsController"
import { privateRoute } from "../middlewares/privateRoute";


const route = Router()


route.get("/car", carsController.getCars)
route.post("/registercar", carsController.register)
route.get("/car/:id", carsController.getCarsId)
route.put("/car/:id", carsController.updateCar)
route.delete("/car/:id", carsController.deleteCar)


export default route