import React from 'react'

var prevScrollPos = window.pageYOffset;
console.log(prevScrollPos);
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    console.log("Prev: " + prevScrollPos);
    console.log("Curr: " + currentScrollPos);
  } else {
    document.getElementById("navbar").style.top = "-52px";
    console.log("Prev: " + prevScrollPos);
    console.log("Curr: " + currentScrollPos);
  }
  prevScrollPos = currentScrollPos;
}

function Navbar() {

    return (
      <div id='navbar' className='d-flex align-items-center justify-content-between nvbr'>
      <a href='#' className='nav-link '>
      <h4 className='mb-0 me-5 ms-4 text-light hide-on-small-only'>&lt;&#7449;&#x4C;&#47;&gt;</h4>
      </a>
      <ul className="hList d-flex me-4 mb-0">
  <li>
    <a href="#click" className="menu">
      <h4 className="menu-title mb-0">who am I</h4>
      <ul className="menu-dropdown">
      
      <li>
      <a className='d-flex align-items-center' href='#about'>
      <i className="material-icons me-1">face</i>About me</a>
      </li>

      <li >
      <a className='d-flex align-items-center' href='#technologies'>
      <i className="material-icons me-1">settings</i>Technologies</a></li>
      </ul>
    </a>
  </li>
  <li>
    <a href="#click" className="menu">
      <h4 className="menu-title menu-title_2nd mb-0">Works</h4>
      <ul className="menu-dropdown">
        <li>
        <a className='d-flex align-items-center' href='#webProjects'>
        <i className="material-icons me-1">language</i>Web</a></li>
        <li>
        <a className='d-flex align-items-center' href='#desigN'>
        <i className="material-icons me-1">brush</i>Design</a></li>
        <li>
        <a className='d-flex align-items-center' href='#music'>
        <i className="material-icons me-1">audiotrack</i>Music</a></li>
      </ul>
    </a>
  </li>
  <li>
    <a href="#click" className="menu">
      <h4 className="menu-title menu-title_3rd mb-0">contact</h4>
      <ul className="menu-dropdown">
        <li>
        <a className='d-flex align-items-center' href='#contact'>
        <i className="material-icons me-1">mail</i>Get in touch</a></li>
        <li>
        <a className='d-flex align-items-center' href='#footer'>
        <i className="material-icons me-1">link</i>Links</a></li>
      </ul>
    </a>
  </li>
</ul>
</div>        
    )
}

export default Navbar