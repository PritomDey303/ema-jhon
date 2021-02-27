import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import Product from './product/Product';
import './Shop.css';
const Shop = () => {
    let first10=fakeData.slice(0,10);
    console.log(first10);
    const [products, setproducts] = useState(first10);
    return (
        <div className="shop">
           <div className="product">
               {products.map(product=><Product product={product}></Product>)}
           </div>
           <div className="cart">
               <h1>cart section</h1>
           </div>
        </div>
    );
}

export default Shop;
