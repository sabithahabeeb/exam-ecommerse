import React, { useContext } from 'react'
import { cartResponseContext } from '../Context/ContextShare'
import Header from '../Components/Header'

function Cart() {
  const {cartControl,setCartControl} = useContext(cartResponseContext)
  console.log(cartControl);
  const removeitem = (id)=>{
    const selectedItem = cartControl.find(item => item.id === id);
    setCartControl((precart) => precart.filter(item => item.id !== id));
  }
  return (
   <>
   <Header/>
      <div style={{ margin: '100px' }} className='d-flex justify-content-center align-items-center'>
        <table className='border shdow w-100'>
          <thead>
            <tr>
              <th className='p-3'>#</th>
              <th className='p-3'>Title</th>
              <th className='p-3'>Image</th>
              <th className='p-3'>Price</th>
              <th className='p-3'>delete</th>
            </tr>
          </thead>
          <tbody>
            {cartControl?.length>0?cartControl.map((item,index)=>(
              <tr>
              <td className='p-3'>{index+1}</td>
              <td className='p-3'>{item.title}</td>
              <td className='p-3'><img height={'50px'} src={item?.image} alt="" /></td>
              <td className='p-3'>{item?.rate}</td>
              <div onClick={()=>removeitem(item?.id)} className='btn p-3'><i class="fa-solid fa-trash"></i></div>
            </tr>
            )):<div className='d-flex justify-content-center align-items-center'><p style={{ color: 'red', fontSize: '40px',fontWeight:'700' }}>NOTHING ON CART</p></div>}
            
          </tbody>
        </table>
      </div>
   </>
  )
}

export default Cart