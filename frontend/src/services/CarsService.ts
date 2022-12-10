import { api } from "../api/api"
import { CarsInterface } from "../interfaces/interfaces"
import React from 'react'


const CarsService = () => {

  const getCars = async (page?: number, limit?: number) => {
   
    try {
      let request
        request = await api.get(`/car?page=${page}&limit=${limit}`)
        return request.data
    } catch (e) {
      console.log(e)
      return null
    }
  }
  const getAllCars = async () => {
   
    try {
      let request
        request = await api.get(`/car`)
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
  const setCars = async (data: FormData) => {
    try {
      const request = await api.post(`/registercar`, data)
      return request
    } catch (e) {
      console.log(e)
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

  return { getCars, getAllCars, getCarsId, setCars, updateCars, deleteCars }
}

export default CarsService