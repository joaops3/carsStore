import { Request, Response } from "express";
import { Cars } from "../models/Cars";
import { unlink } from "fs/promises"
import sharp from "sharp"
import { Carsimg } from "../models/Carimg";
import {s3, deleteaws} from "../middlewares/upload"


export const getCars = async (req: Request, res: Response) => {
    const { page, limit } = (req.query)
    if (!page && !limit) {

        const cars = await Cars.findAll({ include: { model: Carsimg, attributes: { exclude: ["id", "car_id"] } } })
        if (!cars) {
            res.status(400).json({ error: "nenhum carro encontrado" })
        }

        return res.status(200).json({ cars })
    }

    //PAGINATION QUERY
    let offset: number = page ? Number(page) * Number(limit) : 0;

    let totalPages: number = 0
    await Cars.findAndCountAll({ limit: Number(limit), offset: offset, include: { model: Carsimg, attributes: { exclude: ["id", "car_id"] } } })
        .then((data) => {
            if (!data) {
                res.status(400).json({ error: "nenhum carro encontrado" })

            } else {
                totalPages = Math.ceil(data.count / Number(limit)),
                res.status(200).json({ cars: data, totalPages, totalItems: data.count, currentPage: page })
            }

        })
        .catch((e) => console.log(e))
}


export const register = async (req: Request, res: Response) => {
    console.log("aq", req.body)
    if (!req.body.name_car) {
        return res.status(422).json({ error: "nome é obrigatorios" })
    }
    if (!req.body.year) {
        return res.status(422).json({ error: "ano é obrigatorios" })
    }
    if (!req.body.model) {
        return res.status(422).json({ error: "modelo é obrigatorios" })
    }
    if (!req.body.price) {
        return res.status(422).json({ error: "preco é obrigatorios" })
    }
    if (req.files?.length === 0 || req.files === undefined) {
        return res.json({ error: "envie uma imagem" })
    }

    //GERENCIAR IMAGENS
    const files = req.files as Express.MulterS3.File[]

    const filesDb: any = []
    // files.forEach(async (file) => {
    //     filesDb.push(file.filename)
    //     try {
    //         await sharp(file.path)
    //             .toFile(`./public/img/${file.filename}`)
    //         await unlink(file.path)
    //     } catch (e) { console.log(e)}
    // })
    try {
        let newCar = await Cars.create({ name_car: req.body.name_car, model: req.body.model, year: req.body.year, price: req.body.price })

        files.forEach(async (file) => {
            const {location = "error"} = file
            let carimg = await Carsimg.create({ key: file.key, url: location , car_id: newCar.id })
            filesDb.push(carimg)

        })
    } catch (e) { console.log(e) }
    res.status(200).json({ sucesso: "carro cadastrado com sucesso" })
}

export const getCarsId = async (req: Request, res: Response) => {
    const { id } = req.params

    const cars = await Cars.findByPk(id).catch(e => console.log(e))
    if (!cars) {
        return res.status(400).json({ error: "nenhum carro encontrado" })
    }
    res.status(200).json({ cars })

}


export const updateCar = (req: Request, res: Response) => {

    res.status(200).json()
}

export const deleteCar = async (req: Request, res: Response) => {
    const { id } = req.params
    let cars = await Cars.findByPk(id).catch(e => console.log(e))
    let carsimg = await Carsimg.findAll({where: {car_id: id}})
    if (!cars) {
        return res.status(422).json({ error: "car not found" })
    }
     if(carsimg.length > 0){
            carsimg.forEach(async (img) => {
                await deleteaws.deleteObject({ Bucket: process.env.AWS_BUCKET as string, Key: img.key }, function(err: any, data: any) {
                    if (err) console.log(err, err.stack);  // error
                    else     console.log("sucesso");                 // Sucess
                  })
            
            })
        }
    await Carsimg.destroy({where: {car_id: id}})
    await cars.destroy()
    res.status(200).json({ sucesso: "carro deletado" })
}
