import "./product.css"

function Product(props) {
  let lisPproducts = props.product.map((el, index) => (
    <div className="product" key={index}>
      <img src={el.img}></img>
      <div className="data-product">
        <span>model: {el.model}</span>
        <span>display: {el.display}"</span>
        <span>color: {el.color}</span>
        <span>price: {el.price}$</span>
        <button
          onClick={() => {
            props.addToCart(el)
          }}
          className="btn btn-success mt-2"
        >
          Add to cart
        </button>
      </div>
    </div>
  ))
  return <div className="product-div">{lisPproducts}</div>
}

export default Product
