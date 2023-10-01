import React from "react"
import {useEffect} from "react"
import Header from "./components/header/Header.jsx"
import Products from "./components/products/Products.jsx"
import CreateProduct from "./components/createProducts/CreateProduct.jsx"
import {useSelector, useDispatch} from "react-redux"
import {increment, addProduct} from "./redux/cart"
import "./App.css"

export const App = () => {
  const productsIn = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        let fetchProducts = data.products
        fetchProducts.forEach((product) => {
          dispatch(addProduct(product))
        })
      })
  }, [dispatch])

  const addToCart = () => {
    dispatch(increment())
  }
  return (
    <>
      <Header></Header>
      <CreateProduct></CreateProduct>
      <Products productsIn={productsIn} addToCart={addToCart}></Products>
    </>
  )
}
export default App
