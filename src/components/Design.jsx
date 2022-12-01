import React from "react";
import DesignComponent from "./DesignComponent";
// import DesignImageGallery from "./MusicImageGallery.jsx";

const galleryImages = [
  {
    img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    img: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2061&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

function Design() {
  return (
    <div id="desigN" className="container-fluid d-flex justify-content-center">
      <div className="row mt-3 mb-4 ms-0 me-2 container-fluid">
        <h2 className="text-muted text-start">
          <i className="medium material-icons">brush</i>
        </h2>
        <div className="col-md-4">
          <blockquote className="blockquote" style={{ borderColor: "#00aee0" }}>
            <p className="mb-0">
              <br />
            </p>
            <footer className="blockquote-footer">
              <p className="card-text text-white">
                As a designer I have a foundation of four years of university in
                Milan, which gave me the basis for managing a project well, I
                have also participated in other workshops and training
                experiences.
              </p>
              <p className="card-text text-white">
                I've designed sneaker's, designed and laser cut modular
                synthesizer cases with internal LEDs, designed flyers and LP
                covers, managed a light show for one music concert and created
                web banner ads for another.
              </p>
            </footer>
          </blockquote>
          <p className="card-text mb-5">
            <small className="text-muted">
              *NikeSB Dunk low pro Reptilian placed 2nd to the
              #createyourowndunk design contest.
            </small>
          </p>
        </div>

        <div className="col-md-8 mb-5">
          {/* <DesignImageGallery galleryImages={galleryImages} /> */}
        </div>
        <DesignComponent />
      </div>
    </div>
  );
}
export default Design;
