import React from 'react'
import './Button.css'

const Button = ({text, className, type, onClick, disabled}) => {
  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
