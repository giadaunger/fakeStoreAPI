import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { productState } from '../stores/products/atom';
import { cartState } from '../stores/cart/atom';
import '../pages/cssPages/SingleProducts.css'

function SingleProducts() {
    const params = useParams();
    const products = useRecoilValue(productState);
    const product = products.find(p => p.id === parseInt(params.productId))
    const [cart, setCart] = useRecoilState(cartState)

    function HandeAddTocart() {
        const newCartItem = {
            id: product.id,
            qty: 1
        }

        setCart([...cart, newCartItem]);
    }

    return(
        <div className='single-product-div'>
            <img src={product.image} alt={product.title} className='single-product-img' />
            <div className='single-product-info'>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <button onClick={HandeAddTocart}>Add to cart</button>
            </div>
        </div>
    )
}

export default SingleProducts;