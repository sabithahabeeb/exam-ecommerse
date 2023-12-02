import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { cartResponseContext, wishListResponseContext } from '../Context/ContextShare';
function Header({insidelanding}) {
  const {wishListControl,setWishlistControl}=useContext(wishListResponseContext)
  const {cartControl,setCartControl} = useContext(cartResponseContext)
  return (
    <>
<Navbar style={{zIndex:'1'}}  expand="lg" className=" position-fixed top-0 w-100 mb-5 bg-primary">
      <Container className=' '>
        <Link to={'/landing'} style={{height:'40px'}}><Navbar.Brand href="#home"><i className="fa-solid fa-truck"></i>Ecommerce</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         { <Nav className="me-auto d-flex align-items-center">
            <Nav.Link className='btn border rounded ' > <Link to={'/wishlist'} style={{textDecoration:'none',color:'white',width:'150px',height:'50px',fontWeight:'bold'}} className='d-flex align-items-center ms-3'><Badge className='ms-2 me-2 rounded' bg="secondary">{wishListControl.length}</Badge> wishlist<i className="fa-solid fa-heart ms-2"></i></Link> </Nav.Link>
          
            <Nav.Link className='btn border rounded ms-5' > <Link to={'/cart'} style={{textDecoration:'none',color:'white',width:'150px',height:'50px',fontWeight:'bold'}} className='d-flex align-items-center'><Badge className='ms-2 me-2 rounded' bg="secondary">{cartControl.length}</Badge> Cart<i className="fa-solid fa-cart-arrow-down"></i></Link> </Nav.Link>
           
           
          </Nav>}
        </Navbar.Collapse>
      </Container>
      <Link to={'/'} className=' m-3 fw-bolder' style={{height:'50px',color:'white',textDecoration:'none',fontSize:'20px'}}>Logout</Link>
    </Navbar>
    </>
  )
}

export default Header