import React from 'react'
import './NewLetter.css'

const NewLetter = () => {
  return (
    <div className='newsletter'>
         <h1>Get Exclusive Offer On Your Email</h1>
         <p>Suscribe to our newsletter and stay updated  </p>
         <div>
            <input type="email" placeholder='Your Email id ' />
            <button>Suscribe</button>
            
         </div>
    </div>
  )
}

export default NewLetter