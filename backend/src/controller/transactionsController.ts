import { Request, Response } from "express"
import { database } from "../instances/db"
import { User } from "../models/User"
import { Cards } from "../models/Cards"
import { Cars} from "../models/Cars"
import {Op} from "sequelize"

export const registerCard = async (req: Request, res: Response) => {
    const { id } = req.params
    const { card_number, card_code } = req.body
    if (!card_number) {
        return res.json({ error: "numero de cartao obrigatorio" })
    }
    if (!card_code) {
        return res.json({ error: "numero de cartao obrigatorio" })
    }

    const card = await Cards.create({ card_number, card_code, user_id: id })

    res.status(201).json({ sucess: "cartao craido com sucesso" })
}


export const buyCar = async (req: Request, res: Response) => {
    const { id, idcar } = req.params
    const user = await User.findByPk(id)
    const car = await Cars.findByPk(idcar)
    if (!user) {
        return res.json({ error: "usuario nao encontrado" })
    }
    if (!car) {
        return res.json({ error: "carro nao encontrado" })
    }

    await user.addCars([car])

    res.status(201).json({ sucess: "compra feita com sucesso" })
}

export const seeowned = async (req: Request, res: Response) => {
    //GET CARS OWNED BY USER

    const { id } = req.params
    //const user = await User.findOne({ include: { model: Cars, attributes: [], through: { attributes: [] } }, where: { id } })
    const user = await User.findByPk(id)
    if (!user) {
        return res.json({ error: "usuario nao encontrado" })
    }
    const cars = await user.getCars()

    res.status(200).json({ cars })
}


export const sellCar = async (req: Request, res: Response) => {
    //REMOVE A CAR FROM THE USER
    const { id, idcar } = req.params
    const user = await User.findByPk(id)
    const car = await Cars.findByPk(idcar)
    if (!user) {
        return res.json({ error: "usuario nao encontrado" })
    }
    if (!car) {
        return res.json({ error: "carro nao encontrado" })
    }
    await user.removeCars([car])

    res.status(200).json({ sucess: "carro vendido com sucesso" })
}

export const searchItem = async (req:Request, res: Response) => {
    // find item by seach, name or brand
    const {item} = req.params
    if(!item) return res.json({})
    const cars = await Cars.findAll({where: {[Op.or]: [{name_car : {[Op.like]: `%${item}%`}},{model : {[Op.like]: `%${item}%`}} ] }})
    if(!cars){
        return res.json({error: "nenhum carro encontrado"})
    }
    res.status(200).json({cars})
}


