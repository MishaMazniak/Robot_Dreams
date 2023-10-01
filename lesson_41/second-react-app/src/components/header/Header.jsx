import logoProducts from "../../assets/logo-products.png"
import logoMediaExpert from "../../assets/logoMediaExpert.jpeg"
import Cart from "../cart/Cart"
import "./header.css"

function Header(props) {
  return (
    <div className="logo-div">
      <img
        src={logoMediaExpert}
        alt="logo-shop"
        className="logo-media-expert"
      ></img>
      <img src={logoProducts} alt="logo-shop" className="logo-shop"></img>
      <Cart myProduct={props.count} />
    </div>
  )
}
export default Header
