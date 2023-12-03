import CartWidget from "./CartWidget/CartWidget"
import './NavBar.css'
const NavBar = () => {
  return (
    <header>
    <h1>Sebs Calcos</h1>
    <nav>
    <ul>
        <li>Sticker</li>
        <li>Posters</li>
        <li>Compras por Mayor</li>
        <li>Promociones</li>
    </ul>
    </nav>
    <CartWidget/>
    </header>
  )
}

export default NavBar