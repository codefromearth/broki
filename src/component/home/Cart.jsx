import React from 'react'
import './Cart.css'
function Cart() {
  return (
    <div className='Cart-conatiner'>
    <div className='gap'></div>
     <div className="nameheader">
     <pre ><span style={{fontWeight:'bold'}}>Running Cloud Kitchen</span> Zamrudpur ,GK</pre>
     
    
     <ul className='discription'>
     <li>Monthly Rent<br/> 45,000</li>
     <li>Monthly Sales <br/>45,000</li>
     <li>Area <br/> 45,000</li>
     </ul>

     <div className="bottom">

     <div className='talk'><span className='circle'></span>  <span><h3>Talk to us</h3>  </span> </div>
     <div className='share'><h4>share</h4></div>
       
     
     </div>
     </div>
    
    </div>
  )
}

export default Cart