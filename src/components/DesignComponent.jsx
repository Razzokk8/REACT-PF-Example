import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import dunkB from '../assets/Images/BerlinDunk3.png';
import dunkR from '../assets/Images/Dunk5.png';
import rzbeta from '../assets/Images/razzo1beta3.jpg';

function DesignComponent() {
    
    return (

        <div id='sneaker-component' className='mt-3 mb-5'>

        <Carousel showThumbs={false} className='container'>
        {/* item 1 */}
{/*           <div className='d-flex justify-content-center'>
          <section className="card">
          <div className="product-image mt-5">
            <img className='mt-3' src={dunkB} alt="OFF-white Red Edition" draggable="false" />
          </div>
          <div className="product-info mt-2">
            <h2 className='text-black'>NikeSB Dunk low pro Berlin</h2>
            <p className='text-muted'>The 10: Air Jordan 1 off-white - Chicago</p>
          </div>
        </section>
        </div> */}
        {/* end item 1 */}
{/*           <div className='d-flex justify-content-center'>
          <section className="card card-blue">
          <div className="product-image mt-5">
            <img className='mt-3' src={dunkR} alt="OFF-white Blue Edition" draggable="false" />
          </div>
          <div className="product-info mt-3">
            <h2 className='text-black'>NikeSB Dunk low pro Reptilian</h2>
            <p className='text-muted'>Air Jordan 1 Retro High "Off-White - UNC" sneakers</p>
          </div>
          </section>
          </div> */}
          <div>
          <h2 className='pb-3 pt-2 text-primary text-end black pe-3 rounded-top'>popoporcoiddio</h2>
            <img className='d-block w-100' src={rzbeta} alt="..." />
          </div>

          <div>
          <h2 className='pb-3 pt-2 text-primary text-end black pe-3 rounded-top'>prcoddio</h2>
            <img className='d-block w-100' src={rzbeta} alt="..." />
          </div>

        </Carousel>

        </div>
    )
}
export default DesignComponent