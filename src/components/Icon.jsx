import React from 'react'

import htmm from '../assets/Logos/html-5-120.png';
import css from  '../assets/Logos/css3-120.png';
import sas from '../assets/Logos/sass-avatar-120.png'
import js from '../assets/Logos/javascript-120.png';
import react from '../assets/Logos/react-120.png';
import nod from '../assets/Logos/node-js-120.png';
import red from '../assets/Logos/redux-120.png';
import mongo from '../assets/Logos/mongodb-120.png';
import ttw from '../assets/Logos/tailwind-css-120.png';
import boot from '../assets/Logos/bootstrap-120.png';
import eroku from '../assets/Logos/heroku-120.png';
import wp from '../assets/Logos/wordpress-120.png';
// import ele from '../assets/Logos/elementor-120.png';

function Icon() {
    
   return (<div id='iconS'>
        <div className='container mt-5 mb-5 d-flex row row-cols-6 justify-content-evenly'>
        
        <div className='d-flex justify-content-center align-items-center'>
        <div className="hover-text">
        <img src={htmm} alt="html_logo" className='logoTech shadow-icons' />
        <span className="tooltip-text" id="bottom">HTML5</span>
        </div>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
        <div className="hover-text">
        <img src={css} alt="css_logo" className='logoTech shadow-icons' />
        <span className="tooltip-text" id="bottom">CSS3</span>
        </div>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
        <div className="hover-text">
        <img src={js} alt="javaScript_logo" className='logoTech shadow-icons' />
        <span className="tooltip-text" id="bottom">JavaScript</span>
        </div>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
        <div className="hover-text">
        <img src={react} alt="react_logo" className='logoTech shadow-icons'/>
        <span className="tooltip-text" id="bottom">React</span>
        </div>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
        <div className="hover-text">
        <img src={red} alt="redux_logo" className='logoTech shadow-icons'/>
        <span className="tooltip-text" id="bottom">Redux</span>
        </div>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
        <div className="hover-text">
        <img src={sas} alt="sass_logo" className='logoTech shadow-icons'/>
        <span className="tooltip-text" id="bottom">Sass</span>
        </div>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
        <div className="hover-text">
        <img src={nod} alt="node.js_logo" className='logoTech shadow-icons'/>
        <span className="tooltip-text" id="bottom">Node.js</span>
        </div>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
        <div className="hover-text">
        <img src={boot} alt="bootstrap_logo" className='logoTech shadow-icons'/>
        <span className="tooltip-text" id="bottom">Bootsrap</span>
        </div>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
        <div className="hover-text">
        <img src={ttw} alt="Tailwind_logo" className='logoTech shadow-icons'/>
        <span className="tooltip-text" id="bottom">Tailwind</span>
        </div>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
        <div className="hover-text">
        <img src={wp} alt="Wordpress_logo" className='logoTech shadow-icons'/>
        <span className="tooltip-text" id="bottom">Wordpress</span>
        </div>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
        <div className="hover-text">
        <img src={eroku} alt="heroku_logo" className='logoTech shadow-icons'/>
        <span className="tooltip-text" id="bottom">Heroku</span>
        </div>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
        <div className="hover-text">
        <img src={mongo} alt="MongoDB_logo" className='logoTech shadow-icons'/>
        <span className="tooltip-text" id="bottom">MongoDB</span>
        </div>
        </div>

        </div>
    </div>
    )
}

export default Icon 