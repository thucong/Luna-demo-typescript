import React, { ChangeEvent, useContext, useState, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
const Product = () => {
  //state
  const [product, setProduct] = useState("");
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setProduct(event.target.value);
  };
  //context
  let { products, addProduct, deleteProduct } = useContext(ProductContext);
  // useEffect(() => {
  //     console.log(localStorage.getItem('products'))
  //     // if(localStorage && localStorage.getItem('products')){
  //     //     let temp = localStorage.getItem("products");
  //     //     console.log(temp);
  //     //     if(temp){
  //     //         products = JSON.parse(temp)
  //     //         console.log(products)
  //     //     }
  //     // }
  // }, [])

  return (
    <div>
      <div className="add-product">
        <input
          placeholder="add product"
          name="product"
          onChange={onChangeName}
          value={product}
        />
        <button
          type="submit"
          onClick={() => {
            addProduct(product);
            setProduct("");
          }}
        >
          Add
        </button>
      </div>
      <div className="content">
        {products.map((product) => (
          <button className="button-product" key={product.id}>
            {product.title} &nbsp;
            <span className="close" onClick={() => deleteProduct(product.id)}>
              &times;
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;
