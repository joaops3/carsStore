import React from 'react'

interface ButtonInterface {
  children?: React.ReactNode;
  className?: string
}
const ButtonHeader: React.FC<ButtonInterface> = ({children, className, ...rest}) => {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}

export default ButtonHeader