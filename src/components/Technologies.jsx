import React from 'react';
import logoHTML5 from '../assets/Logos/HTML5.png'; // with import
import logoCSS3 from '../assets/Logos/CSS3.png'; // with import
import logoSASS from '../assets/Logos/SASS.png'; // with import
import logoJS from '../assets/Logos/javascript_logo.png';
import reactLogo from '../assets/Logos/react.png';
import nodeLogo from '../assets/Logos/node.png'



function Tech() {
    return (

        <div className='container d-flex justify-content-evenly align-items-center row row-cols-1 row-cols-md-3 g-3 align-self-center' style={{margin: "auto"}}>
    

        <div className="card text-light bg-primary mb-3 p-3 m-5 col" style={{maxWidth: "18rem", minWidth: "10rem" }}>
        <img src={logoHTML5} alt='logo-Html5' className="card-header text-center"></img>
        <div className="card-body d-flex justify-content-center">
        <h5 className="card-title">HTML</h5>
        </div>
        </div>

        <div className="card text-light bg-primary mb-3 p-3 m-5 col" style={{maxWidth: "18rem", minWidth: "10rem"}}>
        <img src={logoCSS3} alt='logo-css3' className="card-header text-center"></img>
        <div className="card-body d-flex justify-content-center">
        <h5 className="card-title">CSS3</h5>
        </div>
        </div>

          <div className="card text-light bg-primary mb-3 p-3 m-5 col" style={{maxWidth: "18rem", minWidth: "10rem"}}>
        <img src={logoSASS} alt='logo-sass' className="card-header text-center"></img>
        <div className="card-body d-flex justify-content-center">
        <h5 className="card-title">SASS</h5>
        </div>
        </div>

            <div className="card text-light bg-primary mb-3 p-3 m-5 col" style={{maxWidth: "18rem", minWidth: "10rem"}}>
        <img src={logoJS} alt='js-logo' className="card-header text-center"></img>
        <div className="card-body d-flex justify-content-center">
        <h5 className="card-title">Javascript</h5>
        </div>
        </div>

            <div className="card text-light bg-primary mb-3 p-3 m-5 col" style={{maxWidth: "18rem", minWidth: "10rem"}}>
        <img src={reactLogo} alt='react-logo' className="card-header text-center"></img>
        <div className="card-body d-flex justify-content-center">
        <h5 className="card-title">React</h5>
        </div>
        </div>

        <div className="card text-light bg-primary mb-3 p-3 m-5 col" style={{maxWidth: "18rem", minWidth: "10rem"}}>
        <img src={nodeLogo} alt='node-logo' className="card-header text-center"></img>
        <div className="card-body d-flex justify-content-center">
        <h5 className="card-title">Node JS</h5>
        </div>
        </div>

        </div>
    )
}
export default Tech