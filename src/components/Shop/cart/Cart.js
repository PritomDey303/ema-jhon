import React from 'react';

const Cart = (props) => {
     
    const formatPrice=price=>{
        return Number(price.toFixed(2));
    }
    console.log(props.cartItem)
    const items=props.cartItem;
    let total=0;
    for(let i=0;i<items.length;i++){
        total=total+items[i].price;
    }
    let shipping=0;
    if(total>0 && total<12.99){
        shipping=12.99;
    }
    else if(total>12.99 && total<25){
        shipping=6.33;
    }
    else{
        shipping=0;
    }
    const tax=formatPrice(total)/10;
    const grandTotal=formatPrice(total)+tax+shipping;
    return (
        <div>
            <h2>Order Summery</h2>
            <h4>Item Ordered:{items.length}</h4>
            <p><small>Items Cost: ${formatPrice(total)}</small></p>
            <p><small>Shipping & Handling: ${shipping}</small></p>
            <p><small>Total before tax: ${formatPrice(total+shipping)}</small></p>
            <p><small>Estimated Tax: ${formatPrice(tax)}</small></p>
            <h2>Order Total: ${formatPrice(grandTotal)}</h2>
        </div>
    );
}

export default Cart;
