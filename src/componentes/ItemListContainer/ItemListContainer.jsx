import React from 'react'
import './ItemListContainer.css'
const ItemListContainer = ({greeting}) => {
  return (
    <h2 style={{color:"blue", padding:"10px"}}>{greeting}</h2>
    
  )
}

export default ItemListContainer