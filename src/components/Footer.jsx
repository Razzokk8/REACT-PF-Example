import React from 'react'


function Foot() {
    
    const today = new Date();
    
    return (
        <footer class="page-footer black">
          <div class="container-fluid">            
            <div class="row m-1">

              <div class="col l6 s12">
              <blockquote>
                <h5 class="white-text">Footer Content</h5>
                </blockquote>
                <p class="grey-text text-muted">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12 container">
                <h2 class="white-text text-muted d-flex align-items-center justify-content-center"><i className="medium material-icons">link</i></h2>
                <div className='d-flex justify-content-between'>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link dssd3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container-fluid ms-3 me-3">
            
            © <span>{today.getFullYear()}</span> Riccardo Limiti
            <a class="grey-text text-lighten-4 right" href="#">&lt;&#7449;&#x4C;&#47;&gt;</a>
            </div>
          </div>
        </footer>
    )
}

export default Foot