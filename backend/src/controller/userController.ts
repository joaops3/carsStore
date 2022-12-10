import { Request, Response } from "express"
import { database } from "../instances/db"
import { User } from "../models/User"
import { Cards } from "../models/Cards"
import { generateToken } from "../middlewares/privateRoute"
import bcrypt from "bcrypt"
import { Cars } from "../models/Cars"



// export const ping =(req:Request, res:Response) => {
//     try{database.authenticate()
//         console.log("funciono")

//     }catch(e){console.log(e)}

//     res.status(200).json({sucess: "sucesso"})
// }


export const getUsers = async (req: Request, res: Response) => {
    const user = await User.findAll({attributes: {exclude: ["password"]}})

    if (!user) {
        return res.status(404).json({ message: "nenhum usuario" })
    }
    res.status(200).json({ users: user })
}

export const createUser = async (req: Request, res: Response) => {
    if (!req.body.email) {
        return res.status(400).json({ message: "email é obrigatorio" })
    }
    if (!req.body.name) {
        return res.status(400).json({ message: "name é obrigatorio" })
    }
    if (!req.body.password) {
        return res.status(400).json({ message: "password é obrigatorio" })
    }
    if (!req.body.nascimento) {
        return res.status(400).json({ message: "nascimento é obrigatorio" })
    }

    //search for user
    const { name, email, password, nascimento, admin } = req.body
    const hasUser = await User.findOne({ where: { email }, }).catch((e) => { console.log(e) })
    if (hasUser) {
        return res.json({ message: "email ja cadastrado" })
    }

    try {
        //generate password
        const salt = await bcrypt.genSalt(12) // gera 12 caracteres aleatorios para colocar dps da senha
        const hash = await bcrypt.hash(password, salt)
        const newUser = await User.create({ name, email, nascimento, admin, password: hash })
        const token = await generateToken({ id: newUser.id, email: newUser.email })
        res.status(201).json({ id: newUser.id, token })
    } catch (e) { res.status(500).json({ message: "erro: " + e }) }
}

export const getUsersId = async (req: Request, res: Response) => {

    const id = req.params.id

    const user = await User.findOne({ include: Cards, where: { id }, attributes: {exclude: ["password"]} })

    //const card = await user.getCards()

    if (!user) { return res.status(404).json({ message: "usuario nao encontrado" }) }

    res.status(201).json({ user: user })
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await User.findByPk(id)
    if (!user) {
        return res.status(404).json({ message: "usuario nao encontrado" })
    }
    await User.destroy({ where: { id } })

    res.status(200).json({ sucesso: "deletado users" })
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await User.findByPk(id)
    if (!user) {
        return res.status(404).json({ message: "usuario nao encontrado" })
    } else {
        const { id, email } = req.body
        user.email = email
        await user.save()
    }
    res.status(200).json({ sucesso: "atualizado users" })
}


export const login = async (req: Request, res: Response) => {
    if (!req.body.email && !req.body.password) {
        return res.status(400).json({ message: "enviar email e senha" })
    }
    const { email, password } = req.body
   
    const user = await User.findOne({ where: { email } })
    if (!user) {
        return res.status(404).json({ message: "usuario nao cadastrado no sistema" })
    }

    //check password and email
    const checkpassword = await bcrypt.compare(password, user.password)
    if (!checkpassword) {
        res.status(400).json({ message: "senha invalida!" })
        return 
    }

    const token = await generateToken({ id: user.id, email: user.email })
    res.status(201).json({ id: user.id, token, type: user.admin })
}


