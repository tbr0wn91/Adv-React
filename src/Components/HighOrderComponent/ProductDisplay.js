import React from 'react';
import HOC from './HOC';
import '../../App.scss'
// /api/products

function ProductDisplay(props){
    const displayPhotos = props.data.map((product, i) => {
        return (
            <div
                key={i}
                className="display-container">
                <img 
                    src={product.image}
                    alt="picsum placeholders"
                />
                <b>{product.price}</b>
                <h1>{product.name}</h1>
            </div>
        )
    })
    return (
        <div>
            <h1>Product Display w/HOC</h1>
            {displayPhotos}
        </div>
    )
}

export default HOC(ProductDisplay, "/api/products");