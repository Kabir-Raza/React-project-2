import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='mainNav'>
      <nav>
        <img src="./images/logo.avif" alt="" />
        <div className='nav1'>
          <Link to="/">
            <h1>Home</h1>
          </Link>

          <Link to="Shop">
            <h1>shop</h1>
          </Link >


          <Link to="Signup">
            <h1>Sign up</h1>
          </Link>

          <Link to="Pay">
            <h1>Payment</h1>
          </Link>
        </div>
        
      </nav>
      <div className="bg">
        <img src="./images/mk11.jpg" alt="" />
      </div>

    </div>
  )
}
