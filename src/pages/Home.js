import React from 'react';
import banner from '../pages/Banner.png'
import '../pages/cssPages/Home.css'
import { Link } from 'react-router-dom';
import Products from './Products';


function Home() {
    return(
        <div>
            <img src={banner} alt='banner' className='banner' />
            <h1>Popular products</h1>
            <Link to='/products' element={<Products />}>
                <button className='home-btn'>Start Shopping!</button>
            </Link>
            <div>
                
            </div>
        </div>
    )
}

export default Home;