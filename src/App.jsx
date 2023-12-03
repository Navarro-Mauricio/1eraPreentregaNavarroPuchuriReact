import React from 'react'
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import './App.css'
const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a Sebs Calcos!"/>
    </div>
  )
}

export default App