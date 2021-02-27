import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import Product from './product/Product';
import Cart from './cart/Cart';
import './Shop.css';
const Shop = () => {
    let first10=fakeData.slice(0,10);
    const [products, setproducts] = useState(first10);
    const [cart, setcart] = useState([]);
    //console.log(cart);
    const cartHandler=(item)=>{
         setcart([...cart,item]);
    }
    return (
        <div className="shop">
           <div className="product">
               {products.map(product=><Product cartFun={cartHandler} product={product}></Product>)}
           </div>
           <div className="cart">
               <Cart cartItem={cart}></Cart>
           </div>
        </div>
    );
}

export default Shop;
