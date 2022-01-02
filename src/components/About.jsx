import React from 'react'
import IMG_7217 from '../assets/Images/IMG_7217.JPG'

function About() {
    return (
        <div style={{margin: "auto"}} className='container mt-5 mb-5'>
        
        <div className="card mb-3 p-5 bg-light" style={{maxWidth: '940px', margin: "auto"}}>
        <div className="row g-0">
        <div className="col-md-4 d-flex">
      <img src={IMG_7217} className="img-fluid rounded-start align-self-center shadow" alt="me" />
    </div>
    <div className="col-md-8">
      <div className="card-body ms-3">
        <h2 className="card-title mb-5">About me</h2>
        <h5>Riccardo Limiti</h5>
        <h5>FULL-STACK DEVELOPER & UX/UI DESIGNER</h5>
        <p className="card-text mt-3">Web Developer, Music Producer, Designer, Cook and IT specialist based in Berlin, Germany.</p>
        <p className="card-text">
        Avid learner, always curious, with a solid international background in customer relations and service, I have specialized in IT and development in the last year.</p>
        <p className="card-text">I come from different experiences in diverse European cities from gastronomy to retail and I am always used to the direct relationship with people.
        I have a strong interest in arts and creativity.</p>
        <p className="card-text">
        I have now to bring ideas and the future to you.</p>
        <p className="card-text">
        Fully trained in HTML5 | JavaScript | Css | React JS | Node JS | Express | MongoDB.
        Open to work remote.</p> 
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <button type="button" className="btn btn-outline-primary m-3 ms-4">Hire me!</button>
    </div>
  </div>
</div>
            
</div>
    )
}

export default About
