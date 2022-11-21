import React from 'react'
// import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/Styles/index.scss'
import App from './App'


const root = document.getElementById('root');
render(
    
    <React.StrictMode>
        <App />
    </React.StrictMode>
    ,
    root
)


