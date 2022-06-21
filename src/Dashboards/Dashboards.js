import React, { useState } from 'react';
import './Dashboards.css'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl} from 'react-bootstrap'; 
// import Products from '../Home/Products';
import Header from '../Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import search from '../image/search.png'
import Products from '../Home/Products';
import Users from '../Home/Users';
import Cart from '../Cart';



const Dashboards = () => {
  
    return (
        <div className='d-flex justify-content-between product-container'>
          <div>
            <Header></Header>
            <Users></Users>
            {/* <Cart></Cart> */}
            
          </div>
          <div>
          <div>
          <Form className="d-flex search-form">
        <FormControl 
          type="search"
          placeholder="Search Products..."
          className="me-2 border-right-0"
          aria-label="Search"
        />
        {/* <Button variant="outline-success">Search</Button> */}
        <img src={search} alt="" />
      </Form>
          </div>
          <div className='d-flex menu position-relative'>
            <div>
            <button class="btn btn-white text-secondary border border-secondary space" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">AllCategories</button>

<div class="offcanvas  offcanvas-end w-50  " tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header">
    <h3 id="offcanvasRightLabel">Categories</h3>
    <button type="button" class="btn-close text-reset text-white position-absolute top-0 start-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="     offcanvas-body ">
  <div>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>
  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  
  </div>

  </div>
</div>
            </div>
            <div>
            <button class="btn btn-white text-secondary border border-secondary space" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Electronics</button>

<div class="offcanvas  offcanvas-end w-50  " tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header">
    <h3 id="offcanvasRightLabel">Categories</h3>
    <button type="button" class="btn-close text-reset text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="     offcanvas-body ">
  <div>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>
  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  
  </div>

  </div>
</div>
            </div>
            <div>
            <button class="btn btn-white text-secondary border border-secondary space" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Home & Lifestyle</button>

<div class="offcanvas  offcanvas-end w-50  " tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header">
    <h3 id="offcanvasRightLabel">Categories</h3>
    <button type="button" class="btn-close text-reset text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="     offcanvas-body ">
  <div>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>
  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  
  </div>

  </div>
</div>
            </div>
            <div>
            <button class="btn btn-white text-secondary border border-secondary space" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Men Fashion</button>

<div class="offcanvas  offcanvas-end w-50   eachmenu" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header">
    <h3 id="offcanvasRightLabel">Categories</h3>
    <button type="button" class="btn-close text-reset text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="     offcanvas-body ">
  <div>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>
  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  
  </div>

  </div>
</div>
            </div>
            <div>
            <button class="btn btn-white text-secondary border border-secondary space" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Women Fashions</button>

<div class="offcanvas  offcanvas-end w-50  " tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h3 id="offcanvasRightLabel">Categories</h3>
    <button type="button" class="btn-close text-reset text-white text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="     offcanvas-body ">
  <div>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>
  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  
  </div>

  </div>
</div>
            </div>
            <div>
            <button class="btn btn-white text-secondary border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><h3><FontAwesomeIcon className='mb-5 me-20' icon={faEllipsisVertical}></FontAwesomeIcon></h3></button>

<div class="offcanvas  offcanvas-end w-50  " tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h3 id="offcanvasRightLabel">Categories</h3>
    <button type="button" class="btn-close text-reset text-white text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="     offcanvas-body ">
  <div>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>
  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">AllCategories</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Home & Lifestyle</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Electronics</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Toys</a>
  </div>

  <div className='mt-2'>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Women Fashions</a>
  <a class="btn btn-white text-secondary border border-secondary space" href="#" role="button">Men Fashion</a>
  
  </div>

  </div>
</div>
            </div>
        </div>
        <Products></Products>
          </div>
        </div>
    );
};

export default Dashboards;