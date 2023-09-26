import Product from "./Product"
import "./products.css"

function Products(props) {
  return (
    <div className="products-div">
      {props.productsIn.map((el, index) => (
        <Product key={index} myProduct={el} addToCart={props.addToCart} />
      ))}
    </div>
  )
}
export default Products
