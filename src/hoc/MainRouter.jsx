import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Foot from '../components/Footer'
import Home from '../components/Home'
import Tech from '../components/Technologies'


function MainR() {
    return (
        <div>
            <Home />
            <Tech />
            <Foot />
        </div>
    )
}

export default MainR
