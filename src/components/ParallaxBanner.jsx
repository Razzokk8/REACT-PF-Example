import React from "react";
import { Parallax } from "react-parallax";
import Typewriter from "typewriter-effect";
import FolderComponent from "./FolderComponent";
import WebCards from "./WebCards";
import bannerPicture from "../assets/Images/darkwebb.jpg";

const Banner = () => (
  <Parallax
    blur={{ min: -15, max: 15 }}
    className="bannerWeb"
    bgImage={bannerPicture}
    style={{ minHeight: "100vh" }}
    // bgImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    bgImageAlt="the cat"
    strength={500}
  >
    <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
      <div className="col-md-12 container-fluid mt-3 bannerWebContent">
        <div className="row">
          <h2 className="align-start text-muted mb-4 mt-3 d-flex align-items-center">
            <i className="medium material-icons me-1">language</i>
          </h2>
          <div className="col-md-8 pe-1">
            <blockquote className="blockquote" style={{ borderColor: "#00aee0" }}>
              <p className="mb-0"></p>
              <footer className="blockquote-footer">
                <p className="card-text text-white">
                  As a Web Developer, just started my career being part of the
                  front end team of the Apart.men company from Hamburg tidying
                  up the typography and layout of the whole website using
                  Wordpress and Elementor.pro.
                </p>
                <p className="card-text text-white">
                  Some other examples of my developer work can be found below by
                  double clicking on the folder and clicking on one of three
                  files you could extract.
                </p>
              </footer>
            </blockquote>
            <h3 className="cd-headline rotate-1 mb-5 text-white text-center mt-5 ms-3">
              <span> Coded with: </span>
              <br />
              <span className="cd-words-wrapper text-primary fw-bold">
                 <Typewriter
                  options={{
                    strings: [
                      "HTML and CSS ",
                      "JavaScript ",
                      "Bootstrap ",
                      "Express.js ",
                      "Node.js ",
                      "React.js",
                      "Wordpress",
                      "",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                /> 
              </span>
            </h3>
            <div>
              <FolderComponent />
            </div>
          </div>
          <div className="col-md-4">
            <WebCards /> 
          </div>
        </div>
      </div>
    </div>
  </Parallax>
);

// subContainer here
function ParallaxBanner() {
  return (
    <div>
      <Banner />
    </div>
  );
}
export default ParallaxBanner;
