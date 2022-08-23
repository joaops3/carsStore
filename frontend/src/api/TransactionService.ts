import React from 'react'
import { api} from "./api"
import { UsersInterface } from '../interfaces/interfaces'
const TransactionService = () => {
 
    const seeOwned =  async(id: string) => {
        try{ 
         const request = await api.post(`/user/${id}/seeowned`)
         return request.data
        }catch(e){
         console.log(e)
         return null
        }
     }

     const buyCar =  async(idUser: string, idCar:string) => {
        try{ 
         const request = await api.post(`/user/${idUser}/buy/${idCar}`)
         return request.data
        }catch(e){
         console.log(e)
         return null
        }
     }
    

     const sellCar =  async(idUser: string, idCar:string) => {
        try{ 
         const request = await api.delete(`/user/${idUser}/buy/${idCar}`)
         return request.data
        }catch(e){
         console.log(e)
         return null
        }
     }
     

  return {seeOwned, buyCar, sellCar}
}

export default TransactionService