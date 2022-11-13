import React from 'react';
import comp1 from '../assets/Images/comp.jpg';
import net1 from '../assets/Images/anesthetixRelease.jpg';
import comp2 from '../assets/Images/comp2.jpeg';
import comp3 from '../assets/Images/comp3.jpg';
import dg from '../assets/Images/grimaldo.jpeg';
import dmr from '../assets/Images/dmrecords.jpeg';
import comp4 from '../assets/Images/comp4.jpg';
import database from '../assets/Images/database.jpg';
import comp5 from '../assets/Images/comp5.jpg';
import comp6 from '../assets/Images/comp6.jpg';
import compmix from '../assets/Images/compmix.jpg';
import ml from '../assets/Images/mini liebe.jpeg';
import speed from '../assets/Images/speed.jpg';
import metz from '../assets/Images/metzger.jpeg';
import gorno from '../assets/Images/gornoland.jpg';
import mcv from '../assets/Images/mcv1.jpg';
import mixc from '../assets/Images/mixcomp.jpg';
import inferno from '../assets/Images/inferno.jpg';
import mjep from '../assets/Images/mjrelease.jpg';

function MosaicGallery() {
    
    return (
    <>
        <div className="containerG mt-0 mb-5" id='mosaicGallery'>

        <a>
        <img className='thumb' src={comp1} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={net1} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={comp2} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={comp3} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={dg} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={dmr} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={database} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={comp4} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={comp5} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={comp6} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={compmix} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={ml} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={mcv} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={metz} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={mjep} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={speed} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={mixc} alt='...'/>
        </a>

        <a>
        <img className='thumb' src={inferno} alt='...'/>
        </a>

        <a >
        <img className='thumb' src={gorno} alt='...'/>
        </a>

      </div>
      </>
    )
}
export default MosaicGallery