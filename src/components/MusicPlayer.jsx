import React from 'react';
import '../player.js';

function MusicPlayer(fileRead,rest,songSelect,pause, play, currentActiveIndex, seekBarStatus, domShuffle, timeFormat, Next, Previous, Volume, VolumeOff, Container) {

    return (

        <div id='mediaPlayer'>
        <header>
         <h1><i className="fas fa-compact-disc" ></i> Juke-Box</h1>
         <p> You can play a song from the list below, or upload your own</p>
         <br/>
         <input type='file' id='check'  accept="audio/mpeg"/>
        </header>
      <div id="container" onClick={songSelect}>
         <div className="items item--active" onClick={play}>
            <p>SoundHelix-Song-1</p>
            <audio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
         </div>
         <div className="items" onClick={songSelect}>
            <p>SoundHelix-Song-2</p>
            <audio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"></audio>
         </div>
         <div className="items" onClick={songSelect}>
            <p>SoundHelix-Song-3</p>
            <audio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"></audio>
         </div>
      </div>
      <div id = 'control'>
         <div className ='icons'>
            <div className='flex'>
               <div onClick={domShuffle}>
                  <i className="fas fa-random" id="random"></i>
               </div>
               <div>
                  <button id="previous" onClick={Previous}>
                  <i className="fas fa-step-backward"></i>
                  </button>
                  <button id="pauseButt" onClick={pause}>
                  <i className="material-icons">pause_circle_filled</i>
                  </button>
                  <button id="playButt" onClick={play}>
                  <i className="fas material-icons">play_circle_filled</i>
                  </button>
                  <button id="next" onClick={Next}>
                  <i className="fas fa-step-forward"></i>
                  </button>
               </div>
               <div>
                  <i className="fas fa-volume-up" id="volume" onClick={Volume}></i>
                  <i className="fas fa-volume-off" id='volume-off'
                  style={{display:"none"}} onClick={VolumeOff}></i>
               </div>
            </div>
            <span id="current">{timeFormat}</span>
            <input className='progress-bar progress-bar-striped' 
            type="range" 
            id="seekBar" 
            value="0">{seekBarStatus}</input>
            <span id="duration">{timeFormat}</span>
            <p id="currentSongName">{currentActiveIndex}</p>
         </div>
      </div>
        </div>
    )
}
export default MusicPlayer