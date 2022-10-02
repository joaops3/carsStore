import React, {useContext} from 'react'
import {Navigate} from "react-router-dom"
import { AuthContext } from '../context/AuthProvider'
 interface Props {
  children: JSX.Element
}
const Private: React.FC<Props> = ({children}) => {
  const {isLogged} = useContext(AuthContext)
  
  if(!isLogged){
    return <Navigate to="/login" replace></Navigate>
  }
  return (
    children
  )
}

export default Private