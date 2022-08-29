import React from 'react'
import './header.css'
import Nav from './nav'
import Main from './main'
import Mark from './mark'


function Header()
{
    return(
        <div  className=" conH">
          <Nav/>
          <Main/>
          <Mark/>
        </div>
    )
}

export default Header