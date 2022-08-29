import React from 'react'
import './mark.css'

function Mark()
{
    const logo1 = require('../../images/clientlogo1.png')
    const logo2 = require('../../images/clientlogo2.png')
    const logo3 = require('../../images/clientlogo3.png')
    const logo4 = require('../../images/clientlogo4.png')
    const logo5 = require('../../images/logo5.png')
    const logo6 = require('../../images/clientlogo6.png')
    return(
        <div className='conm'>
            <div id="img1">
            <img src={logo1} alt="" />
            </div>
            <div id="img2">
            <img src={logo2} alt="" />
            </div>
            <div id="img3">
                 <img src={logo3} alt="" />
            </div>
            <div id="img4">
                 <img src={logo4} alt="" />
            </div>
            <div id="img5">
                 <img src={logo5} alt="" />
            </div>
            <div id="img6">
                  <img src={logo6} alt="" />
            </div>
        </div>
    )
}

export default Mark