import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    const {img, name, price} = product

   
    return (
        <div>
            <Card style={{ width: '8rem' }}>
            <Card.Img variant="top" src={img} width={60} height={100} />
            <Card.Body>
            {/* <Card.Title>{name}</Card.Title> */}
            <h6 className='price text-bold'>Price:{price}</h6>
            {/* <Card.Text>{description}</Card.Text> */}
            <Button onClick={() => handleAddToCart(product)} className='w-100 product-btn' variant="primary">{name.slice(-8)}</Button>
        </Card.Body>
</Card>
        </div>
    );
};

export default Product;