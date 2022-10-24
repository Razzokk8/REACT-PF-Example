import React from 'react'


function Foot() {
    
    const today = new Date();
    
    return (
        <footer class="page-footer black">
          <div class="container">            
            <div class="row">

              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-muted">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h2 class="white-text text-muted d-flex align-items-center">Links <i className="medium material-icons">link</i></h2>
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
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            
            © <span>{today.getFullYear()}</span> Riccardo Limiti
            <a class="grey-text text-lighten-4 right" href="#">&lt;&#7449;&#x4C;&#47;&gt;</a>
            </div>
          </div>
        </footer>
    )
}

export default Foot