import React, {createContext, useState, useEffect} from 'react'
import {loginRequest, getToken, setToken} from "../api/auth"
import {api} from "../api/api"
import { toast } from "react-toastify";

interface Props{
    children: React.ReactNode
}

interface CartInterface{
  id: number
  amount: number
}

interface CartContextInterface{
  quantity: number
  cart: CartInterface[]
  addCart: (id: number) => void
  removeCart: (id: number) => void
  updateCart: (id: number) => void
}

export const CartContext = createContext<CartContextInterface>({} as CartContextInterface)

const CartProvider: React.FC<Props> = ({children}) => {
  
  const [cart, setCart] = useState<CartInterface[]>(() => {
    let actualCart = localStorage.getItem("cart")
    if(actualCart){
      return JSON.parse(actualCart)
    }else{
      return []
    }
  })

  const [quantity, setQuantity] = useState<number>(0)


  const addCart = (id: number) => {
    const updateCart = [...cart]
    const productExist = updateCart.find((item)=> {
      if(item.id === id){
    
        return item
      }
    })
    if(productExist){
      //is not possible to add more than 1
      toast.warning("item já esta no carrinho")
      return
    }
   updateCart.push({id: id, amount: 1})
   setCart(updateCart)
   localStorage.setItem("cart", JSON.stringify(updateCart))
   if(quantity <9){
     setQuantity(updateCart.length)
   }else{
    setQuantity(9)
   }
   toast.success("Item adicionado ao carrinho com sucesso")
  }

  const removeCart = (id: number) => {
    const updateCart = [...cart]
    const productExist = updateCart.filter((item)=> {
      if(item.id !== id){
        
        return item
      }
    })
   setCart(updateCart)
   localStorage.setItem("cart", JSON.stringify(productExist))
   toast.success("Item Removido")

  }

  const updateCart = (id: number) => {

  }

  useEffect(()=> {
    if(cart.length === 0) {
      setQuantity(0)
    }else if(cart.length >9){
      setQuantity(9)
    }else{
      setQuantity(cart.length)
    }
    
  }, [cart])

  return (
   <CartContext.Provider value={{quantity, cart, addCart, removeCart, updateCart}}>
    {children}
   </CartContext.Provider>
  )
}

export default CartProvider