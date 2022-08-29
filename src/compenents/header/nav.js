import React from 'react'
import './nav.css'
function Nav()
{
    const logo = require('./img/logo.png');
    return(
        <div className="conN">
             <div className="logo">
             <img src={logo} alt="" /> 
             </div>
              

            <ul>
                <li> <a href="#">Service</a> </li>
                <li> <a href="#">Service</a> </li>
                <li> <a href="#">Service</a> </li>
            </ul>

            <div className="button">
            <button className='btn'>
                Get Started
            </button>
            </div>
        </div>
    )
}

export default Nav;