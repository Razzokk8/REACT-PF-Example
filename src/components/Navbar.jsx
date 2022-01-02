import React from 'react'


function Navbar() {
    return (
        <div style={{maxHeight: "60px"}}>
            <nav className="navbar navbar-light bg-light">
            <div className="container d-flex justify-content-center">
        <ul className='list-unstyled'>
            <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <h4>&lt;RiccardoLimiti &#47;&gt;</h4>
          </a>

          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item fw-bold" href="#">About</a></li>
            <li><a className="dropdown-item fw-bold" href="#">Technologies</a></li>
            <li><a className="dropdown-item fw-bold" href="#">Contact</a></li>
          </ul>
        </li>
        </ul>
              
          
        </div>
        </nav>
        </div>
    )
}

export default Navbar
