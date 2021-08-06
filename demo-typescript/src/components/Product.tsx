import React, { ChangeEvent, useContext, useState } from 'react'
import { ProductContext } from '../contexts/ProductContext'
const Product = () => {
    //state
    const [product, setProduct] = useState('');
    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setProduct(event.target.value);
    }
    //context
    const {products, addProduct} = useContext(ProductContext);
    return (
        <div>
            <div>
            <input placeholder="add product" name="product" onChange={onChangeName}/>
            <button type="submit" onClick={() => {
                addProduct(product)
                setProduct('')
            }}>Add</button>
            </div>
            <div>
                <button> </button>
            </div>
            
        </div>
    )
}

export default Product
