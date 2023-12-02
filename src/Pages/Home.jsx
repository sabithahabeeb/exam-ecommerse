import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='front'>
      <h1 style={{fontSize:'100px',height:'50%',color:'yellow'}}>Welcome </h1>
      <Link to={'/landing'} className='btn btn-success p-3 m-5'>Get Start <i className="fa-solid fa-arrow-right"></i></Link>
    </div>
  )
}

export default Home