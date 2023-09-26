import "./product.css"

function Product(props) {
  return (
    <div className="product">
      <img src={props.myProduct.images[0]}></img>
      <div className="data-product">
        <span>title: {props.myProduct.title}</span>
        <span>brand: {props.myProduct.brand}</span>
        <span>rating: {props.myProduct.rating}</span>
        <span>price: {props.myProduct.price}$</span>
        <button
          onClick={() => {
            props.addToCart(props.myProduct)
          }}
          className="btn btn-success mt-2"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Product
