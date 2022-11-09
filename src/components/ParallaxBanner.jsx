import React from 'react';
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import FolderComponent from './FolderComponent';
import WebCards from './WebCards';
import bannerPicture from '../assets/Images/darkwebb.jpg';   

const Banner = () => (

    <Parallax

    blur={{ min: -15, max: 15 }}
    className="bannerWeb" 
    bgImage={bannerPicture}
    style={{minHeight:"100vh"}} 
    // bgImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    bgImageAlt="the cat"
    strength={500}>

    <div className='container-fluid d-flex justify-content-center align-items-center flex-column'>
                <div className="col-md-12 container-fluid mt-3 bannerWebContent">
			  <div className="row">
                <h2 className='align-start text-muted mb-4 mt-3 d-flex align-items-center'><i className="medium material-icons me-1">language</i></h2>
				<div className="col-md-8 pe-1">
                <blockquote class="blockquote" style={{borderColor:'#00aee0'}}>
				<p class="mb-0">
				</p>
				<footer class="blockquote-footer">
				<p className="card-text text-white">Web Developer, Music Producer, Designer, Cook and IT specialist based in Berlin, Germany.</p>
                <p className="card-text text-white">Avid learner, always curious, with a solid international background in customer relations and service, I have specialized in IT and development in the last years.</p>
                <p className="card-text text-white">I come from different experiences in diverse European cities from gastronomy to retail and I am always used to the direct relationship with people.
                I have a strong interest in arts and creativity.Lorem ipsum dolor sit amet, ner, always curious, with a solid international background in customer relations and service, I have specialized in consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, ner, always curious, with a solid international background in customer relations and service, I have specialized in consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, ner, always curious, with a solid international background in customer relations and service, I have specialized in consectetur adipiscing elit. Integer posuere erat a ante.</p>   
                <p className="card-text text-white">
                I have now to bring ideas and the future to you.</p> 
				</footer>
			    </blockquote> 
                <p className="card-text mb-5"><small className="text-muted">* As example, this Portfolio page is realized with React and Bootstrap technologies used together.</small></p>
                <h3 className="cd-headline rotate-1 mb-5 text-white text-center mt-5 ms-3">
			<span> Coded with: </span><br/> 
			<span className="cd-words-wrapper text-primary fw-bold">
				<Typewriter options={{strings: ['HTML and CSS ', 'JavaScript ', 'Bootstrap ', 'Express.js ', 'Node.js ','React.js','Wordpress', ''], autoStart: true, loop: true, }} />
			</span>
		    </h3>
                <div>
{/*                 <h5 className='text-primary d-flex align-items-center mb-0 row justify-content-center text-center subTT'>
                DOUBLE CLICK<br/>THE FOLDER<br/>FOR PROJECTS</h5> */}
                <FolderComponent />
                </div>
				</div>
				<div className="col-md-4">
                <WebCards />
				</div>
			</div>
		</div>
    </div>
    </Parallax>
);

// subContainer here
function ParallaxBanner() {
    return (
        <div>
        <Banner />
        </div>
    )
}
export default ParallaxBanner