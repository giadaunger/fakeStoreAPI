import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { productState } from '../stores/products/atom';
import { cartState } from '../stores/cart/atom'; 
import '../pages/cssPages/Cart.css';

function Cart() {
    const products = useRecoilValue(productState);
    const [cart, setCart] = useRecoilState(cartState);

    function handleRemove(id) {
        setCart(cart.filter(ci => ci.id !== id))
    }

    function getProduct(ci) {
        const product = products.find(p => p.id === ci.id)
        const quantity = ci.qty;

        return (
            <div className='cart'>
                <div key={ci.id} className='cart-div'>
            <div className='title-div'>
                <h3>{product.title}</h3>
            </div>
            <img src={product.image} alt={product.title} className='cart-img' />
            <p>Antal: {quantity}</p>
            <button onClick={() => handleRemove(ci.id)} className='cart-btn'>X</button>
        </div>
            </div>
        )
    }

    return(
        <div>
            {cart.map(getProduct)}
        </div>
    )
}

export default Cart;