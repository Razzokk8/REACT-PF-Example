import React from 'react'


function Navbar() {
    return (
        <div style={{maxHeight: "60px"}}>
            <nav className="navbar navbar-light bg-light">
            <div className="container d-flex justify-content-center">
        <ul className='list-unstyled'>
            <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <h4>&lt;&#9736;icc&#8704;rd&#8709;&#8515;imi&#9765;i &#47;&gt;</h4>
          </a>

          <ul className="dropdown-menu dddown" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item fw-bold text-primary" href="#about">About</a></li>
            <li><a className="dropdown-item fw-bold text-primary" href="#technologies">Technologies</a></li>
            <li><a className="dropdown-item fw-bold text-primary" href="#contact">Contact</a></li>
          </ul>
        </li>
        </ul>
              
          
        </div>
        </nav>
        </div>
    )
}

export default Navbar
