import React, { useState } from 'react';
import Cart from '../Cart';
import useProducts from '../hooks/useProducts';
import Product from './Product';
import './Products.css'


const Products = () => {
    const [products] = useProducts()
    
    const [cart, setCart] = useState([])
    
    

    const handleAddToCart = (product) =>{
    
        
        
        setCart(product)

    }
    return (
        <div className='mt-2 product-container'>
            {
                products?.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
            }

            
      <div className='cart-container'>
      <Cart cart={cart}></Cart>
      </div>

        </div>
    );
};

export default Products;