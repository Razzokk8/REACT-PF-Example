import React from 'react'


function Foot() {
    
    const today = new Date();
    
    return (
        <footer className="page-footer black" >
          <div className="container-fluid" id='footer'>            
            <div className="row m-1">

              <div className="col l6 s12">
              <blockquote>
                <h5 className="white-text">Footer Content</h5>
                </blockquote>
                <p className="grey-text text-muted">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12 container">
                <h2 className="white-text text-muted d-flex align-items-center justify-content-center"><i className="medium material-icons">link</i></h2>
                <div className='d-flex justify-content-between'>
                <ul>
                  <li><a href="#!" target='_blank'>Link 1</a></li>
                  <li><a href="#!" target='_blank'>Link 2</a></li>
                  <li><a href="#!" target='_blank'>Link 3</a></li>
                  <li><a href="#!" target='_blank'>Link 4</a></li>
                  <li><a href="#!" target='_blank'>Link 1</a></li>
                  <li><a href="#!" target='_blank'>Link 2</a></li>
                  <li><a href="#!" target='_blank'>Link 3</a></li>
                  <li><a href="#!" target='_blank'>Link 4</a></li>
                </ul>
                <ul>
                  <li><a href="https://welcometothegrid.bandcamp.com" target='_blank'>The grid (Matrixxman)</a></li>
                  <li><a href="https://arkita1.bandcamp.com" target='_blank'>ARKITA REC.</a></li>
                  <li><a href="https://ghostly.com" target='_blank'>Ghostly International</a></li>
                  <li><a href="https://indexmarcelfengler.bandcamp.com" target='_blank'>Index Marcel Fengler</a></li>
                  <li><a href="https://superkillrecords.bandcamp.com" target='_blank'>Superkill Records</a></li>
                  <li><a href="https://kriptikarecords.bandcamp.com" target='_blank'>Kriptika Records</a></li>
                  <li><a href="https://fytwine.com" target='_blank'>Fyt Wine</a></li>
                  <li><a href="https://zerostresspizza.de" target='_blank'>ZEROSTRESS PIZZA</a></li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container-fluid ms-3 me-3">
            © 
            <span>{today.getFullYear()}</span> 
            Riccardo Limiti
            <a 
            className="grey-text text-lighten-4 right" 
            href="#">&lt;&#7449;&#x4C;&#47;&gt;</a>
            </div>
          </div>
        </footer>
    )
}

export default Foot