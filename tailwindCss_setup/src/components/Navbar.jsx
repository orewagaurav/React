import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
       <li> <Link to="/"><li>Home</li></Link></li>
        <li><Link to="/Login"><li>Login</li></Link></li>
        <li><Link to="/Card"><li>Card</li></Link></li>
    </div>
  )
}

export default Navbar
