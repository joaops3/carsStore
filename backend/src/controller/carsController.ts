import { Request, Response } from "express";
import { Cars } from "../models/Cars";
import { unlink } from "fs/promises"
import sharp from "sharp"


export const getCars = async (req: Request, res: Response) => {
    const cars = await Cars.findAll()
    if (!cars) {
        res.status(400).json({ error: "nenhum carro encontrado" })
    }
    res.status(200).json({ cars })
}

export const register = async (req: Request, res: Response) => {
    // if (!req.body.name || !req.body.price || !req.body.model || !req.body.year) {
    //     return res.status(422).json({ error: "faltando nome, ano, preco e modelo são obrigatorios" })
    // }
    if (req.files?.length === 0 || req.files === undefined) {
        return res.json({ error: "envie uma imagem" })
    }
    const files = req.files as Express.Multer.File[]
    const filesDb: any = []
    files.forEach(async (file) => {
        filesDb.push(file.filename)
        try {
            await sharp(file.path)
                .toFile(`./public/img/${file.filename}`)
            await unlink(file.path)
        } catch (e) { console.log(e) }
    })
    try {
        let newCar = Cars.build({ name_car: req.body.name, model: req.body.model, year: req.body.year, carimg: filesDb, price: req.body.price })
        await newCar.save()
    } catch (e) { console.log(e) }
    res.status(200).json({ sucesso: "carro cadastrado com sucesso" })
}

export const getCarsId = async (req: Request, res: Response) => {
    const {id} = req.params
    try{
        const cars = await Cars.findByPk(id)
        if (!cars) {
            return res.status(400).json({ error: "nenhum carro encontrado" })
        }
        res.status(200).json({ cars })
    }   catch(e){console.log(e)} 
}


export const updateCar = (req: Request, res: Response) => {

    res.status(200).json()
}

export const deleteCar =  async (req: Request, res: Response) => {
    const {id} = req.params
    let cars = await Cars.findByPk(id)
    if(!cars){
        return res.status(422).json({error: "car not found"})
    }
    await cars.destroy()
    res.status(200).json({sucesso: "carro deletado"})
}