import {useContext, useState} from "react"
import {addNewProduct} from "../../App"
import "./createProduct.css"

function CreateProduct() {
  const [productsIn, setProducts] = useContext(addNewProduct)
  const [newProduct, setNewProduct] = useState({
    url: "",
    title: "",
    brand: "",
    rating: "",
    price: ""
  })
  const send = () => {
    const poroductToAdd = {
      images: [newProduct.url],
      title: newProduct.title,
      brand: newProduct.brand,
      rating: parseFloat(newProduct.rating),
      price: parseFloat(newProduct.price)
    }

    setProducts([...productsIn, poroductToAdd])

    setNewProduct({
      url: "",
      title: "",
      brand: "",
      rating: "",
      price: ""
    })
  }

  return (
    <div className="creat-product">
      <form className="input-group form">
        <input
          className="form-control"
          type="text"
          placeholder="url foto"
          value={newProduct.url}
          onChange={(e) => setNewProduct({...newProduct, url: e.target.value})}
        ></input>
        <input
          className="form-control"
          type="text"
          placeholder="title"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({...newProduct, title: e.target.value})
          }
        ></input>
        <input
          className="form-control"
          type="text"
          placeholder="brand"
          value={newProduct.brand}
          onChange={(e) =>
            setNewProduct({...newProduct, brand: e.target.value})
          }
        ></input>
        <input
          className="form-control"
          type="text"
          placeholder="rating"
          value={newProduct.rating}
          onChange={(e) =>
            setNewProduct({...newProduct, rating: e.target.value})
          }
        ></input>
        <input
          className="form-control"
          type="text"
          placeholder="price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({...newProduct, price: e.target.value})
          }
        ></input>
      </form>
      <button onClick={send} className="btn btn-success my-3">
        send
      </button>
    </div>
  )
}
export default CreateProduct
