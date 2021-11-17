import React from 'react';
import './Input.css'

const Input = ({placeholder = "", type = 'text'}) => (
    <input 
      className="sharedInput" 
      placeholder={placeholder}
      type={type}
    />
)

export default Input