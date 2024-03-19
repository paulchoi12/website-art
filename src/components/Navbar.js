import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick=()=>setClick(!click)

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                MyArt <i className="fa-brands fa-artstation"></i>
            </Link>
            <div classname='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
            </div>
            <ul>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/gallary' className='nav-links'>
                        Gallary
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links'>
                        About
                    </Link>
                </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}
