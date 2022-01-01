import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from '../components/About'
import Foot from '../components/Footer'
import GetInTouch from '../components/GetInTouch'
import Home from '../components/Home'
import Tech from '../components/Technologies'


function MainR() {
    return (
        <div>
            <Home />
            <About />
            <Tech />
            <GetInTouch />
            <Foot />
        </div>
    )
}

export default MainR
