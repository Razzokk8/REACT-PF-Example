import React from 'react'
import IMG_7217 from '../assets/Images/IMG_7217.JPG'




function About() {

  
    return (

<div style={{margin: "auto"}} className='mt-5 mb-5 silver' id='about'>
  <div className="card mb-3 mt-5 p-2 cardBlock black rounded-2 shadow-lg">
  <div className="row g-0 mb-0">
  <div className="card col-md-4 d-flex black">
    <div className="card-image waves-effect waves-block waves-light cardImage">
      <img className="activator avatar-wobble" src={IMG_7217}/>
    </div>
  </div> 
    <div className="col-md-8 d-flex align-items-center">
      <div className="card-body ">                
       <ul className="collection container ms-1 me-1">
      <li className='collection-item'>      
      <h1 className="text-muted text-center mb-0">Riccardo Limiti</h1>
      </li>
      <li className="collection-item">
      <h5 className='text-primary d-flex align-items-center mb-0'>
        <i className="material-icons me-1">language</i>FULL-STACK DEVELOPER</h5>
        </li>
      <li className="collection-item">
      <h5 className='text-primary d-flex align-items-center mb-0'>
        <i className="material-icons me-1">brush</i>UX/UI GRAPHIC & WEB DESIGNER</h5>
        </li>
      <li className="collection-item">
      <h5 className='text-primary d-flex align-items-center mb-0'>
        <i className="material-icons me-1">audiotrack</i>MUSIC PRODUCER</h5>
        </li>
         </ul> 
          </div>
        </div>
        </div>
        </div>
        <div className='container-fluid text-white mt-5'>
        <div>
	      <div className="row m-3 ms-0 p-1">
        <h2 className="text-muted text-start mb-4">About me</h2>
        <br/>
		    <div className="col-md-12 container">
			  <div className="row">
				<div className="col-md-8 pe-1">
        <blockquote class="blockquote">
				<p class="mb-0">
				</p>
				<footer class="blockquote-footer">
					        <p className="card-text text-white">Web Developer, Music Producer, Designer, Cook and IT specialist based in Berlin, Germany.</p>
                  <p className="card-text text-white">
        Avid learner, always curious, with a solid international background in customer relations and service, I have specialized in IT and development in the last years.</p>
        <p className="card-text text-white">I come from different experiences in diverse European cities from gastronomy to retail and I am always used to the direct relationship with people.
        I have a strong interest in arts and creativity.Lorem ipsum dolor sit amet, ner, always curious, with a solid international background in customer relations and service, I have specialized in consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, ner, always curious, with a solid international background in customer relations and service, I have specialized in consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, ner, always curious, with a solid international background in customer relations and service, I have specialized in consectetur adipiscing elit. Integer posuere erat a ante.</p>   
        <p className="card-text text-white">
        I have now to bring ideas and the future to you.</p> 
				</footer>
			</blockquote> 
        <p className="card-text"><small className="text-muted">* As example, this Portfolio page is realized with React and Bootstrap technologies used together.</small></p>
				</div>
				<div className="col-md-4">
        <blockquote class="blockquote">
				<p class="mb-0">
					Lorem ipsum dolor sit amet, ner, always curious, with a solid international background in customer relations and service, I have specialized in consectetur adipiscing elit. Integer posuere erat a ante.
				</p>
{/* 				<footer class="blockquote-footer">
					Someone famous in <cite>Source Title</cite>
				</footer> */}
			</blockquote> 
			<address className='text-muted'>
				 <strong>Twitter, Inc.</strong><br /> 795 Folsom Ave, Suite 600<br /> San Francisco, CA 94107<br /> <abbr title="Phone">P:</abbr> (123) 456-7890
			</address>
				</div>
			</div>
		</div>
	</div>
</div>        
        </div>
        <div className='d-flex justify-content-center'>
        <span>
    <a href='#contact'>
      <button style={{width:"105px"}} type="button" className="btn btn-outline-primary m-5 ">Hire me!</button>
      </a>
      </span>
      </div>
</div> 
    )
}

export default About
