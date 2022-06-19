import React, { useState } from 'react';
import Cart from '../Cart';
import useProducts from '../hooks/useProducts';
import Product from './Product';
import './Products.css'


const Products = () => {
    const [products] = useProducts()
    
   
    
    

    
    return (
        <div className='mt-2 product-container'>
            {
                products?.map(product => <Product key={product.id} product={product}> <Cart product={product}></Cart></Product>)
            }


        </div>
    );
};

export default Products;