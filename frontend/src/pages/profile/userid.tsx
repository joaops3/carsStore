import React from 'react'
import { Outlet } from 'react-router-dom'

interface Props{
    children?: React.ReactNode
}

const Userid = ({children}: Props ) => {
  return (
    <Outlet></Outlet>
  )
}

export default Userid