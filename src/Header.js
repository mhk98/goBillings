// import React from 'react';
// import { Nav, Navbar } from 'react-bootstrap';
// import { Container, } from 'react-bootstrap';
// import './Header.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faArrowDownAZ, faPenToSquare, faPlusCircle, faTruck } from '@fortawesome/free-solid-svg-icons'
// const Header = () => {
//     return (
//         <Navbar bg="light" expand="lg">
//   <Container fluid>
//     {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
    
//     <Navbar.Toggle aria-controls="navbarScroll" />
//     <Navbar.Collapse id="navbarScroll">
//       <Nav
//         className="me-auto my-2 my-lg-0 bg-white"
//         style={{ maxHeight: '100px' }}
//         navbarScroll
//       >
//         <Nav.Link className='headers' href="#action1"><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon> Note</Nav.Link> 
//         <Nav.Link className='headers' href="#action2"><FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>Shipping</Nav.Link> 
//         <Nav.Link className='headers' href="#action2"><FontAwesomeIcon  icon={faArrowDownAZ}></FontAwesomeIcon>Hold Orders</Nav.Link> 
//         <Nav.Link className='headers' href="#action2"><FontAwesomeIcon  icon={faPlusCircle}></FontAwesomeIcon>New Item</Nav.Link>
        
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
//     );
// };

// export default Header;

import React from 'react';
import { Nav } from 'react-bootstrap';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDownAZ, faBars, faDashboard, faFileInvoiceDollar, faGear, faGripLines, faLocationDot, faPenToSquare, faPlusCircle, faTruck } from '@fortawesome/free-solid-svg-icons'
import goBilling from './image/goBilling.png'
import { Link } from 'react-router-dom';
import Users from './Home/Users';
import Cart from './Cart';

const Header = () => {
  return (
    <div className='d-flex justify-content-between mt-2 header-container'>
      
<div className=''>
<button class="btn bg-white headers border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
</button>

<div class="offcanvas offcanvas-start dropsection" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    {/* <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
    <div>
    <img src={goBilling} alt="" />
    <p className='text-start'><small>Location:</small></p>
    <h5>Los Angeles, California</h5>
    </div>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body text-start bg-white">
  
  <div className='d-flex align-items-center btn-color mt-2'>
    <h5><FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon></h5>
    <h5><Nav.Link className='ms-3' as={Link} to="about">Dashboard</Nav.Link></h5>
  </div>
  <div className='d-flex align-items-center location-btn mt-2'>
  <h5><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></h5>
  <h5><Nav.Link className='ms-3' as={Link} to="about">Locations</Nav.Link></h5>
  </div>
  <div className='d-flex align-items-center btn-color mt-2'>
  <h5><FontAwesomeIcon icon={faFileInvoiceDollar}></FontAwesomeIcon></h5>
  <h5><Nav.Link className='ms-3' as={Link} to="about">Pos Invoices</Nav.Link></h5>
  </div>
  <div className='d-flex align-items-center btn-color '>
    <h5><FontAwesomeIcon className='bg-white' icon={faGear}></FontAwesomeIcon></h5>
  <h5><Nav.Link className='ms-3' as={Link} to="about">Settings</Nav.Link></h5>
  </div>
  </div>

</div>

</div>
<Nav.Link className='headers btn' href="#action1"><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon> Note</Nav.Link> 
 <Nav.Link className='headers btn' href="#action2"><FontAwesomeIcon className='' icon={faTruck}></FontAwesomeIcon>Shipping</Nav.Link> 
<Nav.Link className='headers btn' href="#action2"><FontAwesomeIcon  icon={faArrowDownAZ}></FontAwesomeIcon>Hold Orders</Nav.Link> 
<Nav.Link className='headers btn' href="#action2"><FontAwesomeIcon  icon={faPlusCircle}></FontAwesomeIcon>New Item</Nav.Link>

    </div>
  );
};

export default Header;