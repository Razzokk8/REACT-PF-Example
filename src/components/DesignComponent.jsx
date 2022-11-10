import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import dunkB from '../assets/Images/BerlinDunk3.png';
import dunkR from '../assets/Images/Dunk5.png';
import rzbeta from '../assets/Images/razzo1beta3.jpg';
import gdes from '../assets/Images/graphicDesign.jpg';

function DesignComponent() {
    
    return (

        <div id='sneaker-component' className='mt-3 mb-5'>

        <Carousel showThumbs={false} className='container'>

          <div>
          <h2 className='pb-3 pt-2 text-primary text-end black pe-3 rounded-top'>Sound Design</h2>
            <img className='d-block w-100' src={rzbeta} alt="..." />
          </div>

          <div>
          <h2 className='pb-3 pt-2 text-primary text-end black pe-3 rounded-top'>Product Design</h2>
            <img className='d-block w-100' src={rzbeta} alt="..." />
          </div>

          <div>
          <h2 className='pb-3 pt-2 text-primary text-end black pe-3 rounded-top'>Graphic Design</h2>
          <div className='black d-flex justify-content-center align-items-start vh-100'>
          
            <img className='d-block w-100' src={gdes} alt="..." />
          </div>
          </div>

          <div>
          <h2 className='pb-3 pt-2 text-primary text-end black pe-3 rounded-top'>Sneakers Design</h2>

          <div className='d-flex justify-content-center align-items-start black container vh-100'>
          <section className="card me-3 ms-2 mt-0 mb-2">
          <div className="product-image mt-5">
            <img className='mt-3' src={dunkB} alt="OFF-white Red Edition" draggable="false" />
          </div>
          <div className="product-info mt-2">
            <h2 className='text-black'>NikeSB Dunk low pro Berlin Partytown</h2>
            <p>The 10: Air Jordan 1 off-white - Chicago</p>
          </div>
        </section>
        <section className="card card-blue me-2 ms-3 mb-2 mt-0">
          <div className="product-image mt-5">
            <img className='mt-3' src={dunkR} alt="OFF-white Blue Edition" draggable="false" />
          </div>
          <div className="product-info mt-3">
            <h2 className='text-black'>NikeSB Dunk low pro Reptilian</h2>
            <p>Air Jordan 1 Retro High "Off-White - UNC" sneakers</p>
          </div>
          </section>
          </div>
          </div>

        </Carousel>

        </div>
    )
}
export default DesignComponent