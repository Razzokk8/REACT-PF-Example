import React from 'react'
import IMG_7217 from '../assets/Images/IMG_7217.JPG'

function About() {
    return (
         <div style={{margin: "auto"}} className='mt-5 mb-5 silver' id='about'>
        
        <div className="card mb-2 p-4 cardBlock black">
        <h2 className="mb-4 text-muted text-center">About me</h2>
        <div className="row g-0 mb-0">
        
        <div className="card col-md-4 d-flex black">

        

    <div className="card-image waves-effect waves-block waves-light cardImage">
      <img className="activator avatar-wobble" src={IMG_7217}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-white">
      <b>Riccardo Limiti</b>
      <i className="material-icons right">arrow_upward</i></span>
      <p className='text-white text-muted'>Personal information</p>
    </div>
    <div className="card-reveal pinello">
      <span className="card-title grey-text text-white d-flex justify-content-between align-items-center mb-3">
      <b>Riccardo Limiti</b>
      <i className="material-icons right">close</i>
      </span>
      <ul class="collection">
      <li class="collection-item text-muted">08.06.1982 Milano</li>
      <li class="collection-item text-muted">🇮🇹 Italian: native</li>
      <li class="collection-item text-muted">🇩🇪 German: C1</li>
      <li class="collection-item text-muted">🇬🇧 English: B2</li>
      <li class="collection-item">
      <address className='text-muted'>
				Mahlowerstr.9 <br /> Berlin, DE 12049<br />
			</address></li>

    </ul>
      <p className='text-muted'></p>
      <p className='text-muted'></p>
      <p className='text-muted'></p>
      <p className='text-muted'></p>

     
    </div>
  </div>
    <div className="col-md-8">
      <div className="card-body ms-3 me-0 pe-0">
       <ul className="collection">
      <li className="collection-item">
      <h5 className='text-primary d-flex align-items-center'>
        <i className="tiny material-icons me-1">language</i>FULL-STACK DEVELOPER</h5>
        </li>
      <li className="collection-item">
      <h5 className='text-primary d-flex align-items-center'>
        <i className="tiny material-icons me-1">brush</i>UX/UI GRAPHIC & WEB DESIGNER</h5>
        </li>
      <li className="collection-item">
      <h5 className='text-primary d-flex align-items-center'>
        <i className="tiny material-icons me-1">audiotrack</i>MUSIC PRODUCER</h5>
        </li>
    </ul> 
        <p className="card-text mt-3">Web Developer, Music Producer, Designer, Cook and IT specialist based in Berlin, Germany.</p>
        <p className="card-text">
        Avid learner, always curious, with a solid international background in customer relations and service, I have specialized in IT and development in the last years.</p>
        <p className="card-text">I come from different experiences in diverse European cities from gastronomy to retail and I am always used to the direct relationship with people.
        I have a strong interest in arts and creativity.</p>   
        <p className="card-text">
        I have now to bring ideas and the future to you.</p> 
        <p className="card-text"><small className="text-muted">* As example, this Portfolio page is realized with React and Bootstrap technologies used together.</small></p>
      </div>
    </div>
    <span className='center'>
    <a href='#contact'>
      <button style={{width:"105px"}} type="button" className="btn btn-outline-primary m-3">Hire me!</button>
      </a>
      </span>
  </div>
</div>           
</div> 
    )
}

export default About
