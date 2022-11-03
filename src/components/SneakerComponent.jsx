import React from 'react';
import dunkB from '../assets/Images/BerlinDunk3.png';
import dunkR from '../assets/Images/Dunk5.png';

function Sneakers() {

    
    
    return (

        <div id='sneaker-component'>

        <main className="container">
        <section className="card">
          <div className="product-image mt-5">
            <img className='mt-3' src={dunkB} alt="OFF-white Red Edition" draggable="false" />
          </div>
          <div className="product-info mt-2">
            <h2>Nike X OFF-white</h2>
            <p>The 10: Air Jordan 1 off-white - Chicago</p>
            <div className="price">$999</div>
          </div>

        </section>

        <section className="card card-blue">
          <div className="product-image mt-5">
            <img className='mt-3' src={dunkR} alt="OFF-white Blue Edition" draggable="false" />
          </div>
          <div className="product-info mt-3">
            <h2>Nike X OFF-white</h2>
            <p>Air Jordan 1 Retro High "Off-White - UNC" sneakers</p>
            <div className="price">$1599</div>
          </div>

        </section>
      </main>



        </div>
    )
}
export default Sneakers