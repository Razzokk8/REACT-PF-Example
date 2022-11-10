import React from 'react'
import Typewriter from 'typewriter-effect';

import wall1 from '../assets/Images/wall1.jpeg';
// import wall2 from '../assets/Images/wall2.jpeg';
import wall3 from '../assets/Images/wall3.jpeg';
import wall4 from '../assets/Images/wall4.jpeg';
import wall6 from '../assets/Images/wall6.JPG';
// import wall7 from '../assets/Images/wall7.jpeg';
import wall8 from '../assets/Images/wall8.jpeg';
import wall9 from '../assets/Images/wall9.png';

function Home() {
    const woolyImages = [ wall1, wall3, wall4, wall6, wall8, wall9];
    // const API_KEY = process.env.REACT_APP_APIKEY;

    const randomImage =
    woolyImages[Math.floor(Math.random() * woolyImages.length)];
    console.log(randomImage);

    return (
        <div className='d-flex justify-content-center homey'>
        <div className="card text-white border-0 mt-0">
        
        <img src={randomImage} className="img-fluid fondo" alt="welcomeToMyHome" />

        <div className="card-img-overlay d-flex flex-column justify-content-end m-0 p-0">

        <div className='fadedToB d-flex'>

		<div class="col-md-4 ms-4 leftC d-flex row justify-content-start mb-5">
        <a className="weatherwidget-io" href="https://forecast7.com/en/52d5213d40/berlin/" data-label_2="BERLIN" data-font="Roboto" data-theme="blank" data-mode="Current" data-days="3" data-textcolor="White" >BERLIN</a><br/><b className='ps-0 mt-3 text-muted'> {document.lastModified} </b>
		</div>
		<div class="col-md-8 ms-2 me-4 rightC d-flex row justify-content-start mb-5">
        <h1 className="card-title mb-0">Hi! I am <b>Riccardo Limiti,</b></h1>
        <h1 className="card-title mb-0">I am: 
        </h1>
            <section className="cd-intro m-3 ms-0 me-0">
		    <h1 className="cd-headline rotate-1">
			<span className="cd-words-wrapper text-white fw-bold">
				<Typewriter options={{strings: ['WEB DEVELOPER ', 'FRONTEND ENGINEER','A PROGRAMMER ', 'DIGITAL CREATIVE ', 'MUSIC PRODUCER ','A DESIGNER ', 'AN ARTIST ', ''], autoStart: true, loop: true, }} />
			</span>
		    </h1>
	        </section>
        <p className="card-text text-muted mt-1">This is my creative portfolio and personal website.</p>
		</div>
        </div>
 
    </div>
</div>
</div>
    )
} 

export default Home












