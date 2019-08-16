import React from 'react';
import HOC from './HOC';
import '../../App.scss'
// /api/products

function ProductDisplay(props){
   const displayProducts = props.data.map((product, i) =>{
        return (
            <div
                key={i}
                className="display-container"
            >
                <img
                    src={product.image}
                    alt="products"
                />

                <b>{product.price}</b>
                <h1>{product.name}</h1>

            </div>
        )
   })
    return (
        <div>
            {displayProducts}
        </div>
    )
}

export default HOC(ProductDisplay, "/api/products");