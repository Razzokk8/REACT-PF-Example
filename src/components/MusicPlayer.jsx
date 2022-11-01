import { React } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import  track1 from '../assets/Music/Inferno.mp3';
import track2 from '../assets/Music/Speed.mp3';
import track3 from  '../assets/Music/Ahisogi.mp3';
import track4 from '../assets/Music/osc515.mp3';
import track5 from '../assets/Music/outoffocus.mp3';

function MusicPlayer() {

    return (

        <div id='mediaPlayer'>
        <div>
        <div id="container">

          <div className="items black row d-flex justify-content-center align-items-center">
            <p className='text-start mb-2'><b>Riccardo Limiti - OutOfFocus</b></p>
            <ReactAudioPlayer
         src={track5}
         autoPlay
         controls
         />
         <p className='text-start text-muted mt-2'>Unreleased, 2022  &copy; Riccardo Limiti</p>
         </div>

         <div className="items black row d-flex justify-content-center align-items-center">
            <p className='text-start mb-2'><b>Riccardo Limiti - A. - Jizo</b></p>
            <ReactAudioPlayer
         src={track3}
         autoPlay
         controls
         />
         <p className='text-start mt-2 text-muted'>Database, March 18, 2020 &copy; ARKITA REC.</p>
         </div>

         <div className="items black row d-flex justify-content-center align-items-center">
            <p className='text-start mb-2'><b>Matrixxman & Riccardo Limiti - Inferno</b></p>
            <ReactAudioPlayer
         src={track1}
         autoPlay
         controls
         />
         <p className='text-start mt-2 text-muted'>V.A. Spectral 139, September 21, 2018 &copy; Ghostly International</p>
         </div>

         <div className="items black row d-flex justify-content-center align-items-center">
            <p className='text-start mb-2'><b>Matrixxman & Riccardo Limiti - Speed</b></p>
            <ReactAudioPlayer
         src={track2}
         autoPlay
         controls
         />
         <p className='text-start mt-2 text-muted'>V.A. IMF10 Compilation Part1, April 22, 2018  &copy; Index Marcel Fengler</p>
         </div>

         <div className="items black row d-flex justify-content-center align-items-center">
            <p className='text-start mb-2'><b>Riccardo Limiti - Osc515</b></p>
            <ReactAudioPlayer
         src={track4}
         autoPlay
         controls
         />
         <p className='text-start mt-2 text-muted'>Unreleased, 2017  &copy; Riccardo Limiti</p>
         </div>

        </div>
      </div> 
        </div>
    )
}
export default MusicPlayer

