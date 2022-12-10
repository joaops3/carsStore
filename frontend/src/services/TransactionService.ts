import React from 'react'
import { api} from "../api/api"
import { UsersInterface } from '../interfaces/interfaces'
const TransactionService = () => {
 
    const seeOwned =  async(id: string) => {
       
         const request = await api.get(`/user/${id}/seeowned`)
         return request
     
     }

     const buyCar =  async(idUser: string, idCar:string) => {
        try{ 
         const request = await api.post(`/user/${idUser}/buy`)
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