import React from "react";
import { Parallax } from "react-parallax";
// import Player from "./Player";
import bannerMusicPicture from "../assets/Images/darkmodular.jpg";
// import { Carousel } from "rs-3d-react-carousal";
import database from "../assets/Images/database.jpg";
import inferno from "../assets/Images/inferno.jpg";
import speed from "../assets/Images/speed.jpg";
// import MosaicGallery from "./MosaicCovers";

let slides = [
  <a
    href="https://arkita1.bandcamp.com/album/database"
    target="_blank"
    rel="noreferrer"
  >
    <img src={database} alt="database-album-cover" />
  </a>,
  <a
    href="https://ghostly.bandcamp.com/track/inferno"
    target="_blank"
    rel="noreferrer"
  >
    <img src={inferno} alt="inferno-single-cover" />
  </a>,
  <a
    href="https://indexmarcelfengler.bandcamp.com/track/speed"
    target="_blank"
    rel="noreferrer"
  >
    <img src={speed} alt="speed-single-cover" />
  </a>,
];

const BannerMusic = () => (
  <Parallax
    blur={{ min: -15, max: 15 }}
    className="bannerMusic"
    style={{ minHeight: "100vh" }}
    bgImage={bannerMusicPicture}
    // bgImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    bgImageAlt="the cat"
    opacity={0.9}
    strength={500}
  >
    <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
      <div className="col-md-12 container-fluid mt-3 bannerWebContent">
        <div className="row">
          <h2 className="align-start text-muted mb-4 mt-3 d-flex align-items-center">
            <i className="medium material-icons me-1">audiotrack</i>
          </h2>
          <div className="col-md-8 pe-1">
            <blockquote
              className="blockquote"
              style={{ borderColor: "#00aee0" }}
            >
              <p className="mb-0"></p>
              <footer className="blockquote-footer">
                <p className="card-text text-white">
                  Music and the desire to compose one of the first strong
                  emotions and sensations that I have felt in my life.
                  <br />
                  Since I was very young I have always been attracted and
                  fascinated by instruments suitable for electronic music and
                  their evolution.
                  <br />
                  By consuming tons of music hardware I've come to be a huge fan
                  of modular synthesis.
                </p>
                <p className="card-text text-white">
                  I have been composing techno and dance music for many years,
                  have appeared on several digital compilations, and 12" vinyl
                  dj releases.
                  <br />
                  Press Play on the player and it goes boom boom!
                </p>
              </footer>
            </blockquote>
            <br />
            <div className="d-flex justify-content-center mt-5 mb-5">
              {/* <Player />  */}
            </div>
          </div>
          <div className="col-md-4 mb-5">
            {/* <MosaicGallery /> */}

            {/* <Carousel slides={slides} autoplay={true} interval={4000} /> */}
          </div>
        </div>
      </div>
    </div>
  </Parallax>
);

export default BannerMusic;
