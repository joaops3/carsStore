import React, {createContext, useState, useEffect} from 'react'
import {loginRequest, getToken, setToken} from "../api/auth"
import {api} from "../api/api"


interface Props{
    children: React.ReactNode
}

interface AuthContextInterface{
  isLogged: boolean
  user: any
  login: (email:string, password: string) => Promise<void> 
  logout: () => void
}

export const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface)

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
      setUser(user)
      setIsLogged(true)
    }
  }, [])

  return (
   <AuthContext.Provider value={{isLogged, login, logout, user}}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider