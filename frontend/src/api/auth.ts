import {api} from "./api"


export const getToken = () => {
    const tokenStg = localStorage.getItem("user")
    if (!tokenStg) {
        return null
    }
    const token = JSON.parse(tokenStg)
    return token ?? null
}

export const setToken = (value: any) => {
    localStorage.setItem("user", JSON.stringify(value))
}

export const loginRequest = async (email:string, password: string) => {
  let  data = { email, password}
  try{
    const request = await api.post("/login", data)
    return request.data
  }catch(e){
    console.log(e)
    return null
  }

}