import { Router } from "express";
import * as carsController from "../controller/carsController"
import { privateRoute } from "../middlewares/privateRoute";
import {upload} from "../middlewares/upload"
import express from "express"


const route: express.Router = Router()


route.get("/car", carsController.getCars)
route.post("/registercar", upload.array("carimg", 5 ), carsController.register)
route.get("/car/:id", carsController.getCarsId)
route.put("/car/:id", carsController.updateCar)
route.delete("/car/:id", carsController.deleteCar)


export default route