import React from "react";
import database from "../assets/Images/database.jpg";
import inferno from "../assets/Images/inferno.jpg";
import speed from "../assets/Images/speed.jpg";

function MusicCards() {
  return (
    <div id="Mcards" className="d-flex justify-content-center">
      <div className="cards-list">
        <a
          href="https://arkita1.bandcamp.com/album/database"
          target="_blank"
          rel="noreferrer"
        >
          <div className="card 1">
            <div className="card_image">
              <img src={database} alt="database-album-cover" />
            </div>
          </div>
        </a>

        <a
          href="https://ghostly.bandcamp.com/track/inferno"
          target="_blank"
          rel="noreferrer"
        >
          <div className="card 2">
            <div className="card_image">
              <img src={inferno} alt="inferno-single-cover" />
            </div>
          </div>
        </a>

        <a
          href="https://indexmarcelfengler.bandcamp.com/track/speed"
          target="_blank"
          rel="noreferrer"
        >
          <div className="card 3">
            <div className="card_image">
              <img src={speed} alt="speed-single-cover" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
export default MusicCards;
