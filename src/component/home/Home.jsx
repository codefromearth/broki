import React from 'react'
import './style.css'
import Header from './Header'
import Cart from './Cart'
function Home() {
  return (
    <>
    <Header/>
    <div className='flex-cart'>
    <Cart/>
    <Cart/><Cart/><Cart/><Cart/><Cart/><Cart/><Cart/><Cart/><Cart/><Cart/><Cart/><Cart/><Cart/><Cart/><Cart/><Cart/><Cart/><Cart/><Cart/>

    </div>
    </>
  )
}

export default Home