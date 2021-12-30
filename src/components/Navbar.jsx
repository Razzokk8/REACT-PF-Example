import React from 'react'


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
            <div className="container d-flex justify-content-center">
        <ul className='list-unstyled'>
            <li class="nav-item dropdown ">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <h2>&lt;Riccardo Limiti &#47;&gt;</h2>
          </a>

          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item fw-bold" href="#">About</a></li>
            <li><a class="dropdown-item fw-bold" href="#">Technologies</a></li>
            <li><a class="dropdown-item fw-bold" href="#">Contact</a></li>
          </ul>
        </li>
        </ul>
              
          
        </div>
        </nav>
        </div>
    )
}

export default Navbar
