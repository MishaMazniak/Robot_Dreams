import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header.jsx"
import Products from "./Products.jsx"
import "../css/index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Products />
  </React.StrictMode>
)
