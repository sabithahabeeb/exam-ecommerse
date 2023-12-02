import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing'
import WishList from './Pages/WishList'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
function App() {
  return (
    < >
        
    <Routes>
    <Route path='/' element={<Home/>}/>

      <Route path='/landing' element={<Landing/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
     
    </>
  );
}

export default App;
