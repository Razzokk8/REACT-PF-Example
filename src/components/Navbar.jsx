import React from 'react'


function Navbar() {
    return (
      <div className='d-flex align-items-center justify-content-between nvbr'>
      <a href='#' className='nav-link active'>
      <h4 className='mb-0 me-5 ms-4 text-light'>&lt;&#7449;&#x4C;&#47;&gt;</h4>
      </a>
      <ul className="hList d-flex me-4 mb-0">

      <li id='scrollerPlus'>
      <a class="btn-floating red hide-on-med-and-up pulse">
    <i class="material-icons">arrow_downward</i>
    </a>
    </li>

  <li>
    <a href="#click" className="menu">
      <h4 className="menu-title mb-0 hide-on-small-only">who am I</h4>
      <ul className="menu-dropdown hide-on-small-only">
      <li className='d-flex align-items-center'>
      <i className="material-icons me-1">face</i>About me</li>
      <li className='d-flex align-items-center'>
      <i className="material-icons me-1">settings</i>Technologies</li>
      </ul>
    </a>
  </li>
  <li>
    <a href="#click" className="menu">
      <h4 className="menu-title menu-title_2nd mb-0 hide-on-small-only">Works</h4>
      <ul className="menu-dropdown hide-on-small-only">
        <li className='d-flex align-items-center'>
        <i className="material-icons me-1">language</i>Web</li>
        <li className='d-flex align-items-center'>
        <i className="material-icons me-1">brush</i>Design</li>
        <li className='d-flex align-items-center'>
        <i className="material-icons me-1">audiotrack</i>Music</li>
      </ul>
    </a>
  </li>
  <li>
    <a href="#click" className="menu">
      <h4 className="menu-title menu-title_3rd mb-0 hide-on-small-only">contact</h4>
      <ul className="menu-dropdown hide-on-small-only">
        <li className='d-flex align-items-center'>
        <i className="material-icons me-1">mail</i>Get in touch</li>
        <li className='d-flex align-items-center'>
        <i className="material-icons me-1">link</i>Links</li>
      </ul>
    </a>
  </li>
</ul>
</div>        
    )
}

export default Navbar