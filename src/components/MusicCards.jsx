import React from 'react';

import database from '../assets/Images/database.jpg';
import inferno from '../assets/Images/inferno.jpg';
import speed from '../assets/Images/speed.jpg';

function MusicCards() {
    
    return (

        <div id='Mcards' className='d-flex justify-content-center'>
        <div className="cards-list">

        <a href='https://arkita1.bandcamp.com/album/database' target='_blank'>
        <div className="card 1">
          <div className="card_image"><img src={database} /></div>
{/*           <div className="card_title title-white">
             <p>Card Title</p> 
          </div> */}
        </div>
        </a>

        <a href='https://ghostly.bandcamp.com/track/inferno' target='_blank'>
        <div className="card 2">
          <div className="card_image">
            <img src={inferno} />
          </div>
{/*           <div className="card_title title-white">
             <p>Card Title</p> 
          </div> */}
        </div>
        </a>

        <a href='https://indexmarcelfengler.bandcamp.com/track/speed' target='_blank'>
        <div className="card 3">
          <div className="card_image">
            <img src={speed} />
          </div>
{/*           <div className="card_title">
             <p>Card Title</p> 
          </div> */}
        </div>
        </a>
{/*         <div className="card 4">
          <div className="card_image">
            <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
          </div>
          <div className="card_title title-black">
            <p>Card Title</p>
          </div>
        </div> */}
      </div>
        </div>
    )
}
export default MusicCards