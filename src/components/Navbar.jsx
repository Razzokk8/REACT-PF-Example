import React from 'react'



function Navbar() {

    return (
      <div className='d-flex align-items-center justify-content-between nvbr'>
      <a href='#' className='nav-link'>
      <h4 className='mb-0 me-5 ms-4 text-light'>&lt;&#7449;&#x4C;&#47;&gt;</h4>
      </a>
      <ul className="hList d-flex me-4 mb-0">
      <li id='scrollerPlus'>

      <a class="btn-floating position-fixed red hide-on-med-and-up pulse">
    <i class="material-icons">arrow_downward</i>
    </a>
    </li>

  <li>
    <a href="#click" className="menu">
      <h4 className="menu-title mb-0 hide-on-small-only">who am I</h4>
      <ul className="menu-dropdown hide-on-small-only">
      
      <li >
      <a className='d-flex align-items-center' href='#about'>
      <i className="material-icons me-2">face</i>About me</a>
      </li>

      <li >
      <a className='d-flex align-items-center' href='#technologies'>
      <i className="material-icons me-2">settings</i>Technologies</a></li>
      </ul>
    </a>
  </li>
  <li>
    <a href="#click" className="menu">
      <h4 className="menu-title menu-title_2nd mb-0 hide-on-small-only">Works</h4>
      <ul className="menu-dropdown hide-on-small-only">
        <li>
        <a className='d-flex align-items-center' href='#webProjects'>
        <i className="material-icons me-2">language</i>Web</a></li>
        <li>
        <a className='d-flex align-items-center' href='#desigN'>
        <i className="material-icons me-2">brush</i>Design</a></li>
        <li>
        <a className='d-flex align-items-center' href='#music'>
        <i className="material-icons me-2">audiotrack</i>Music</a></li>
      </ul>
    </a>
  </li>
  <li>
    <a href="#click" className="menu">
      <h4 className="menu-title menu-title_3rd mb-0 hide-on-small-only">contact</h4>
      <ul className="menu-dropdown hide-on-small-only">
        <li>
        <a className='d-flex align-items-center' href='#contact'>
        <i className="material-icons me-2">mail</i>Get in touch</a></li>
        <li>
        <a className='d-flex align-items-center' href='#footer'>
        <i className="material-icons me-2">link</i>Links</a></li>
      </ul>
    </a>
  </li>
</ul>
</div>        
    )
}

export default Navbar