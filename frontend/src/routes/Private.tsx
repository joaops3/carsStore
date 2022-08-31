import React from 'react'
import {Navigate} from "react-router-dom"
 interface Props {
  children: JSX.Element
}
const Private: React.FC<Props> = ({children}) => {
  let isLogged = true
  
  if(!isLogged){
    return <Navigate to="/login" replace></Navigate>
  }
  return (
    children
  )
}

export default Private