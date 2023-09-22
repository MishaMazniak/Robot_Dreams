import React from "react"
import ReactDOM from "react-dom/client"
import {useState} from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.js"
import Header from "./Header.jsx"
import Products from "./Products.jsx"
import "./index.css"

export const App = () => {
  let tv = {
    display: 65,
    model: "SAMSUNG",
    color: "white",
    price: 250,
    img: "src/assets/TV.jpeg"
  }
  let laptop = {
    display: 15.6,
    model: "ACER",
    color: "black",
    price: 500,
    img: "src/assets/laptop.jpeg"
  }
  let xBox = {
    display: "TV",
    model: "XBOX",
    color: "black",
    price: 350,
    img: "src/assets/X-Kom.jpeg"
  }
  let products = [tv, laptop, xBox]
  const [productsIn, setProducts] = useState(products)
  const [productsInCart, setProductsInCart] = useState([])

  const addToCart = (prod) => {
    setProductsInCart([...productsInCart, prod])
  }
  return (
    <React.StrictMode>
      <Header count={productsInCart.length}></Header>
      <Products productsIn={productsIn} addToCart={addToCart}></Products>
    </React.StrictMode>
  )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />)
