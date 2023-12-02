import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row ,Col} from 'react-bootstrap'
import axios from 'axios'
import { cartResponseContext, wishListResponseContext } from '../Context/ContextShare';
import Header from '../Components/Header';

function Landing() {
const {wishListControl,setWishlistControl} = useContext(wishListResponseContext)
const {cartControl,setCartControl} = useContext(cartResponseContext)
  const [items,setItems] = useState([])
  const [wishlist,setWishlist] = useState([])
  const [cart,setCart] = useState([])
useEffect(()=>{
axios.get('https://fakestoreapi.com/products').then((response)=>{
  setItems(response.data)
}).catch((error)=>{
  console.log(error);
})
},[])
console.log(items);
const addWishList = (id)=>{
  const selectedItem = items.find(item => item.id === id)
setWishlist((prewishlist)=>[...prewishlist,id])
setWishlistControl((prewishlist)=>[...prewishlist,{
  id: selectedItem.id,
  image:selectedItem.image,
  title: selectedItem.title,
  rate:selectedItem.rating.rate,
  description: selectedItem.description,
  category: selectedItem.category,
}])
}
// console.log(wishlist);
// console.log(wishListControl);
const addCart = (id)=>{
  const selectedItem = items.find(item => item.id === id)
setCart((preCart)=>[...preCart,id])
setCartControl((prewishlist)=>[...prewishlist,{
  id: selectedItem.id,
  image:selectedItem.image,
  title: selectedItem.title,
   rate:selectedItem.rating.rate,
  description: selectedItem.description,
  category: selectedItem.category,
}])
}
// console.log(cartControl);
// console.log(cart);
  return (
   <>
      <Header/>
  
      <Row className='ms-5' style={{ marginTop: '100px' }}>
          {
      items?.length>0?items.map((product)=>(
        <Col  className='mb-5' sm={120} md={6} lg={4} xl={3}>
        <Card style={{ width: '18rem',height:'auto',marginTop:'50px' }} className=''>
        <Card.Img height={'350px'} variant="top" src={product?.image} />
        <Card.Body>
          <Card.Title style={{height:'30px'}}>{product?.title.slice(0,20)}</Card.Title>
          <Card.Text>
           {product?.description.slice(0,40)}...
          </Card.Text>
          <p style={{fontWeight:'600',color:'red'}}>${product?.rating.rate}</p>
          <Card.Text className='fw-bold'>
           {product?.category}
          </Card.Text>
          <div className='d-flex flex-row justify-content-between'>
            <Button onClick={()=>addWishList(product?.id)} ><i class="fa-solid fa-heart"></i>
            </Button>
            <Button onClick={()=>addCart(product?.id)} className='' ><i class="fa-solid fa-cart-plus"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
      
  
        </Col>
      )):<p>Nothing To Display</p>
    }
  
        
      </Row>
  
   </>
    
  )
}

export default Landing