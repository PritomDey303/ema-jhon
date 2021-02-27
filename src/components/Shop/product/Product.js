import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {name,seller,price,stock,img}=props.product;
    return (
        <div className="product-section">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                
                <p><small>By {seller}</small></p>
                
                <h4>Price: ${price}</h4>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={()=>props.cartFun(props.product)}><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;
