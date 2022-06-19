import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useEffect } from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    const [item, setItem] = useState({cart})
    const [finalCart, setFinalCart] = useState([])
    console.log(cart)
    const {name, price} = cart || {};
    console.log(cart?.name)
    

    useEffect(  () =>{
        if(cart){
            setItem(cart)
        }
    }, [cart])

    console.log(item.name)


    const handleAddToFinalCart = (item) =>{
        let newFinalCart= [...finalCart, item] 
        setFinalCart(newFinalCart)
    }
    const handleDeleteToFinalCart = (finalCart) =>{
        
        let newFinalCart= finalCart.pop()
        setFinalCart(newFinalCart)
    }

    let total = 0;
    for(const product of finalCart){
        total = total + product.price;
    }

    return (
            <div className='d-flex justify-content-between cart mt-4 p-2'>
                <button className='border-0'><FontAwesomeIcon className='icon-btn' icon={faPenToSquare}></FontAwesomeIcon></button>
                <h6>Name:{item.name}</h6>
                <h6 className='mr-10'>Price:{item.price}</h6>
                <button className='border-0' onClick={() => handleAddToFinalCart(item)}><FontAwesomeIcon className='icon-btn' icon={faPlusCircle}></FontAwesomeIcon></button>
                <h6>Quantity:${finalCart.length}</h6>
                <button className='border-0' onClick={() => handleDeleteToFinalCart(item)}><FontAwesomeIcon className='icon-btn' icon={faMinusCircle}></FontAwesomeIcon></button>
                <h6>Total Price: {total}</h6>
                <button className='border-0'>X</button>
            </div>
    );
};

export default Cart;