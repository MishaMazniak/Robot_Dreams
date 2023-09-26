import React from "react"
import ReactDOM from "react-dom/client"
import {useState, useEffect} from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.js"
import Header from "./Header.jsx"
import Products from "./Products.jsx"
import CreateProduct from "./CreateProduct.jsx"
import "./index.css"

export const NotificationContext = React.createContext()

export const App = () => {
  const [productsIn, setProducts] = useState([])
  const [productsInCart, setProductsInCart] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        let fetchProducts = data.products
        setProducts(fetchProducts)
      })
  }, [])

  const addToCart = (prod) => {
    setProductsInCart([...productsInCart, prod])
  }
  return (
    <React.StrictMode>
      <Header count={productsInCart.length}></Header>
      <NotificationContext.Provider value={[productsIn, setProducts]}>
        <CreateProduct></CreateProduct>
      </NotificationContext.Provider>
      <Products productsIn={productsIn} addToCart={addToCart}></Products>
    </React.StrictMode>
  )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />)
