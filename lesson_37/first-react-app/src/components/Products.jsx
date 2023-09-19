import Product from "./Product"
import "./products.css"

function Products(props) {
  return (
    <div className="products-div">
      <Product product={props.productsIn} addToCart={props.addToCart} />
    </div>
  )
}
export default Products
