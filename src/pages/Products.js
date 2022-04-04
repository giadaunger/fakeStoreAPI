import React from 'react';
import { useRecoilValue } from 'recoil';
import { productState } from '../stores/products/atom'
import { Link } from 'react-router-dom';
import '../pages/cssPages/Products.css'


function Products() {
    const products = useRecoilValue(productState);
    return(
        
            <div className='product-wrap'>
                {products.map( product => (
                    <Link className='product' key={product.id} to={`/products/${product.id}`}>
                         <img className='product-img' src={product.image} alt={product.title} />
                         <h4>{product.title}</h4>
                    </Link>
                ))}
            </div>
    )
}

export default Products;