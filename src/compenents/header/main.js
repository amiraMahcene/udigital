import React from 'react'
import './main.css'
import Mark from './mark'


function Main()

{
    const lala = require('./img/lala.png');
    return(
       

      <div className="conM">
        <div className="left">
         <h1>Let's Grow Your Brain 
            To The Next Level</h1>
         <p>
         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
         </p>
         <button className='btn'>See our work</button>
        </div>
        <div className="right">
         <img src={lala} alt="" />
        </div>
        
      </div>
    )
}

export default Main;