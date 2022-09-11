import React, {createContext, useState, useEffect} from 'react'
import {loginRequest, getToken, setToken} from "../api/auth"
import {api} from "../api/api"


interface Props{
    children: React.ReactNode
}

export const Context = createContext<any>(undefined!)

const AuthProvider: React.FC<Props> = ({children}) => {
  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [user, setUser] = useState(null)

  const login = async(email:string, password:string) => { 
    const data = await loginRequest(email, password)
    
    if(data){
      setToken(data)
      setIsLogged(true)
    }
  }

  const logout = () => {
    setToken(null)
    setIsLogged(false)
  }

  useEffect(()=> {
    const user = getToken()
   
    if(user){
      
      setIsLogged(true)
    }
  }, [user])

  return (
   <Context.Provider value={{isLogged, login, logout}}>
    {children}
   </Context.Provider>
  )
}

export default AuthProvider