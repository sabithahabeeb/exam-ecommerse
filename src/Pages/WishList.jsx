import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { cartResponseContext, wishListResponseContext } from '../Context/ContextShare';
import Header from '../Components/Header';


function WishList() {
  const { wishListControl, setWishlistControl } = useContext(wishListResponseContext)
  const { cartControl, setCartControl } = useContext(cartResponseContext)
  const [cart, setCart] = useState([])
  console.log(wishListControl);
  const addCart = (id) => {

    const selectedItem = wishListControl.find(item => item.id === id);
    setCart((preCart) => [...preCart, selectedItem])
    setWishlistControl((prevWishList) => prevWishList.filter(item => item.id !== id));
    setCartControl((preCart) => [...preCart, selectedItem])
  }
  console.log(cart);
  return (
   <>
      <Header/>
      <div className=''>
        <Row className='ms-5' style={{ marginTop: '100px' }}>
          {
            wishListControl?.length > 0 ? wishListControl.map((items) => (
              <Col className='mb-5' sm={120} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem', height: 'auto', marginTop: '50px' }} className=''>
                  <Card.Img height={'350px'} variant="top" src={items?.image} />
                  <Card.Body>
                    <Card.Title style={{ height: '30px' }}>{items?.title.slice(0, 20)}....</Card.Title>
                    <Card.Text>
  
                    </Card.Text>
                    <Card.Text className='fw-bold'>
                      {items?.description.slice(0, 40)}...
                    </Card.Text>
                    <p style={{ fontWeight: '600', color: 'red' }}>${items?.rate}</p>
                    <div className='d-flex flex-row justify-content-between'>
  
                      <Button onClick={() => addCart(items.id)} className='' ><i class="fa-solid fa-cart-plus"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
  
  
              </Col>
            )) : <div className='d-flex justify-content-center align-items-center'><p style={{ color: 'red', fontSize: '40px',fontWeight:'700' }}>NOTHING ON WISHLIST</p></div>
          }
  
  
  
  
        </Row>
  
      </div>
   </>
  )
}

export default WishList