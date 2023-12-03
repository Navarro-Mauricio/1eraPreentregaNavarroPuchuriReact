import './CartWidget.css'
const CartWidget = () => {
    
    const imagenCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png"
  return (
    <div class="contenedorCarrito">
    <img class="imgCarrito" src={imagenCarrito} alt="imagen Carrito" />
    <p class="contadorCarrito">7</p>
    </div> 
  )
  
}

export default CartWidget