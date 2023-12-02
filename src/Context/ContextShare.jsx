import React, { createContext, useState } from 'react'
export const wishListResponseContext = createContext()
export const cartResponseContext = createContext()

function ContextShare({children}) {
    const [wishListControl,setWishlistControl] = useState([])
    const [cartControl,setCartControl]= useState([])
  return (
    <wishListResponseContext.Provider value={{wishListControl,setWishlistControl}}>
      <cartResponseContext.Provider value={{cartControl,setCartControl}}>  {children}</cartResponseContext.Provider>
        </wishListResponseContext.Provider>
  )
}

export default ContextShare