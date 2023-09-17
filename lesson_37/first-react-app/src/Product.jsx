import "./css/product.css"
function Product() {
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
  let lisPproducts = products.map((el) => (
    <div className="product">
      <img src={el.img}></img>
      <div className="data-product">
        <span>model: {el.model}</span>
        <span>display: {el.display}"</span>
        <span>color: {el.color}</span>
        <span>price: {el.price}$</span>
      </div>
    </div>
  ))
  return <div className="product-div">{lisPproducts}</div>
}
export default Product
