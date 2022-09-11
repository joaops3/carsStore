import axios from 'axios'
import React from 'react'
import { api} from "../api/api"
import { UsersInterface, CardsInterface } from '../interfaces/interfaces'

const UserService = () => {
 
    const setUser =  async(data: UsersInterface) => {
       try{ 
        const request = await api.post("/cadastro", data)
        return request.data
       }catch(e){
        console.log(e)
        return null
       }
    }
    const getUser =  async(id:string) => {
        try{ 
         const request = await api.get(`/user/${id}`)
         return request.data
        }catch(e){
         console.log(e)
         return null
        }
     }
     const updateUser =  async(id: string, data: UsersInterface) => {
        try{ 
         const request = await api.put(`/user/${id}`, data)
         return request.data
        }catch(e){
         console.log(e)
         return null
        }
     }
     const deleteUser =  async(id: string) => {
        try{ 
         const request = await api.delete(`/user/${id}`)
         return request.data
        }catch(e){
         console.log(e)
         return null
        }
     }
     const registerCard =  async(id: string, data: CardsInterface) => {
        try{ 
         const request = await api.post(`/user/${id}/registercard`, data)
         return request.data
        }catch(e){
         console.log(e)
         return null
        }
     }

     const getCep =  async(cep: string) => {
      try{ 
       const request = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
       return request
      }catch(e){
       return e
      }
   }



  return {setUser, getUser, updateUser, deleteUser, getCep, registerCard}
}

export default UserService