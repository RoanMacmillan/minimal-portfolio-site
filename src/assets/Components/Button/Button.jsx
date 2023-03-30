import React from 'react'
import './Button.css'

const Button = ({text, className, onClick}) => {
  return (
    <div className={className}  onClick={onClick} >
      {text}
    </div>
  )
}

export default Button
