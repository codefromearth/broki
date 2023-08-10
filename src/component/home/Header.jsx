import React from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'
function Header() {
  const navigate=useNavigate();
   
  const logout=()=>{
    navigate('/')

  }

  return (
    <div className='container'>
   
    <div className='upper-section'>
    <header className='header'>
    
    <h1>Broki</h1>
    <div className='right-section'>
    <span><h3 onClick={logout}>Logout</h3></span>
    <span><h3>  Location</h3></span>
    </div>
    
    </header>
    
    <ul className='menu'>
    <li>Cloud Kitchen</li>
    <li>cafe</li>
    <li>Dine in</li>
    <li>QSR</li>
    <li>take away</li>
    </ul>
    <input type='text' id="inputarea"/>
    </div>
    
    <div className="bottom-section">
      <span>setup included</span>
      <span>price</span>
      <span>Area: Sq ft</span>
    </div>
    
    
   
    </div>
  )
}

export default Header