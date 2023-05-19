import React from 'react';
import '../css/Navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navigation'>
<ul className='links'>
    <Link to='/'>
        <li>Home</li>
        </Link>
    <Link to='/about'>
    <li>About us</li>
    </Link>
    <Link to='/login'>
        <li>
            Login
        </li>
    </Link>
    <Link to='/register'>
       <li>Register</li>    
    </Link>
</ul>
        </div>
        <div className='profile'>
<p>Profile</p>
        </div>
    </div>
  )
}

export default Navbar