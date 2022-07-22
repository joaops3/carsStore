import {Request, Response} from "express"
import {database} from "../instances/db"


export const ping =(req:Request, res:Response) => {
    try{database.authenticate()
        console.log("aeeeeeeeeeeeeeeee")

    }catch(e){console.log(e)}

    res.status(200).json({sucess: "sucesso"})
}


export const getUsers = (req: Request, res: Response) => {

    res.status(200).json({sucesso: "users aqui"})
}

export const getUsersId = (req: Request, res: Response) => {

    res.status(200).json({sucesso: "users aqui"})
}

export const deleteUser = (req: Request, res: Response) => {

    res.status(200).json({sucesso: "deletado users"})
}

export const updateUser = (req: Request, res: Response) => {

    res.status(200).json({sucesso: "deletado users"})
}

