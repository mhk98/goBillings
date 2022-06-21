import { Form, Nav, Navbar } from 'react-bootstrap';
import { Container, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './Users.css'
import Cart from '../Cart';
import { Link } from 'react-router-dom';




const Users = () => {
  
    return (
       <div className='users-container'>
         <Navbar className='user mt-3' expand="lg">
  <Container fluid>
    
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       
       <Nav.Link className='headers user' href="#action1"><FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon> Steve Jobs</Nav.Link>
{/*         
        <Nav.Link className='headers user users' as={Link} to="form"><FontAwesomeIcon  icon={faPlusCircle}></FontAwesomeIcon></Nav.Link> */}
        

        <div>
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1>Add New Customer</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <Form className='mt-4'>
      <input className='py-2 mt-3 w-100 h-15 border-0 border-bottom ' type="text" class="form-control" name="" placeholder='Name' id="" />
      <input className='py-2 mt-3 w-100 h-15 border-0 border-bottom ' type="text" class="form-control" name="" placeholder='Email' id="" />
      <input className='py-2 mt-3 w-100 h-15 border-0 border-bottom ' type="text" class="form-control" name="" placeholder='Phone' id="" />
      <input className='py-2 mt-3 w-100 h-15 border-0 border-bottom ' type="number" class="form-control" name="" placeholder='Currency' id="" />
      <input className='py-2 mt-3 w-100 h-15 border-0 border-bottom ' type="text" class="form-control" name="" placeholder='TAX ID' id="" />
      <h5 className='text-primary mt-3'><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> <button className='text-primary border-0 bg-white'>Add More Details</button></h5>
      <button className='btn bg-primary w-75 text-white p-3 mt-4 form-btn'>Update</button>
      </Form>


      </div>
      
    </div>
  </div>
</div>

<a class="btn headers user users" data-bs-toggle="modal" href="#exampleModalToggle" role="button"><FontAwesomeIcon  icon={faPlusCircle}></FontAwesomeIcon></a>
        </div>
       
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
       </div>
    );
};

export default Users;