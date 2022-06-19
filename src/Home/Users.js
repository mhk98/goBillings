import { Nav, Navbar } from 'react-bootstrap';
import { Container, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './Users.css'
import Cart from '../Cart';




const Users = () => {
  
    return (
       <div>
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
        
        <Nav.Link className='headers user users' href="#action2"><FontAwesomeIcon  icon={faPlusCircle}></FontAwesomeIcon></Nav.Link>
        
       
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Cart></Cart>
       </div>
    );
};

export default Users;