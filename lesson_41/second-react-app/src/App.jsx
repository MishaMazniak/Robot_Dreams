import React from "react"
import {useState, useEffect} from "react"
import Header from "./components/header/Header.jsx"
import Products from "./components/products/Products.jsx"
import CreateProduct from "./components/createProducts/CreateProduct.jsx"
import "./App.css"

export const addNewProduct = React.createContext()

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
      <addNewProduct.Provider value={[productsIn, setProducts]}>
        <CreateProduct></CreateProduct>
      </addNewProduct.Provider>
      <Products productsIn={productsIn} addToCart={addToCart}></Products>
    </React.StrictMode>
  )
}
export default App
