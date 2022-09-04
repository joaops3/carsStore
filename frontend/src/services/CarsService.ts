import { api } from "../api/api"
import { CarsInterface } from "../interfaces/interfaces"
import React from 'react'


const CarsService = () => {

  const getCars = async (page?: number, limit?: number) => {
    console.log("pege", page, limit)
    try {
      let request
     
    
        request = await api.get(`/car?page=${page}&limit=${limit}`)
        return request.data
    } catch (e) {
      console.log(e)
      return null
    }
  }

  const getCarsId = async (id: string) => {
    try {
      const request = await api.get(`/car/${id}`)
      return request.data
    } catch (e) {
      console.log(e)
      return null
    }
  }
  const setCars = async (data: CarsInterface) => {
    try {
      const request = await api.post(`/registercar`, data)
      return request.data
    } catch (e) {
      console.log(e)
      return null
    }
  }
  const updateCars = async (id: string, data: CarsInterface) => {
    try {
      const request = await api.put(`/car/${id}`, data)
      return request.data
    } catch (e) {
      console.log(e)
      return null
    }
  }
  const deleteCars = async (id: string) => {
    try {
      const request = await api.delete(`/car/${id}`)
      return request.data
    } catch (e) {
      console.log(e)
      return null
    }
  }

  return { getCars, getCarsId, setCars, updateCars, deleteCars }
}

export default CarsService