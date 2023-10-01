import iconCart from "../../assets/icon-cart.png"
import "./cart.css"

function Cart(props) {
  return (
    <div className="icon-cart position-absolute top-0 end-0">
      <img src={iconCart} alt="icon-cart"></img>
      <span className="position-absolute top-0 end-0 number ">
        {props.myProduct}
      </span>
    </div>
  )
}
export default Cart
