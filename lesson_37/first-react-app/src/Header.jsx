import logoProducts from "./assets/logo-products.png"
import logoMediaExpert from "./assets/logoMediaExpert.jpeg"
import "./css/header.css"
function Header() {
  return (
    <div className="logo-div">
      <img
        src={logoMediaExpert}
        alt="logo-shop"
        className="loga-media-expert"
      ></img>
      <img src={logoProducts} alt="logo-shop" className="logo-shop"></img>
    </div>
  )
}
export default Header
