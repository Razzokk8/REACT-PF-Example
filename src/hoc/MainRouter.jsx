import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from '../components/About'
// import Design from '../components/Design'
// import Foot from '../components/Footer'
// import GetInTouch from '../components/GetInTouch'
import Home from '../components/Home'
// import Music from '../components/Music'
import Tech from '../components/Technologies'
import WebProjects from '../components/WebProjects'


function MainR() {
    return (
        <div>
            <Home />
           <About />
            <Tech />
             <WebProjects />
              {/* <Design />
             <Music /> 
             <GetInTouch />
            <Foot />  */}
        </div>
    )
}

export default MainR
