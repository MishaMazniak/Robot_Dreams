import React from "react"
import ReactDOM from "react-dom/client"
import {useState, useEffect} from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.js"
import Header from "./Header.jsx"
import Products from "./Products.jsx"
import "./index.css"

export const App = () => {
  let products = []
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        let fetchProducts = data.products
        fetchProducts.forEach((product) => {
          products.push(product)
        })
      })
  }, [])
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
