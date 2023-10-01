import iconCart from "../../assets/icon-cart.png"
import {useSelector} from "react-redux"
import "./cart.css"

function Cart() {
  const count = useSelector((state) => state.cart.count)
  return (
    <div className="icon-cart position-absolute top-0 end-0">
      <img src={iconCart} alt="icon-cart"></img>
      <span className="position-absolute top-0 end-0 number ">{count}</span>
    </div>
  )
}
export default Cart
