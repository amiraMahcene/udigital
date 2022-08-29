import React from 'react'
import Header from './compenents/header/header';
import Aboutus from './compenents/aboutus/aboutus';
import Contact from './compenents/contact/contact'
import Feedback from './compenents/feedback/feedback';
import Footer from './compenents/footer/footer'
import Ourwork from './compenents/ourwork/ourwork'
import Service from './compenents/services/service'
function App()
{
    return (
        
         <div> 
            < Header/>
            <Service/>
            < Aboutus/>
            <Contact/>
            <Feedback/>
            <Footer/>
            <Ourwork/>
           
         </div>
        
    )
}

export default App;