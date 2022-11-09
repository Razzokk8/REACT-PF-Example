import React from 'react';
import { Parallax } from 'react-parallax';


// import MusicCards from './MusicCards';
import Player from './Player';
import bannerMusicPicture from '../assets/Images/darkmodular.jpg';
import { Carousel } from 'rs-3d-react-carousal';
import database from '../assets/Images/database.jpg';
import inferno from '../assets/Images/inferno.jpg';
import speed from '../assets/Images/speed.jpg';
// import MusicImageGallery from './MusicImageGallery.jsx';

let slides = [
    <a href='https://arkita1.bandcamp.com/album/database' target='_blank' rel="noreferrer">
    <img  src={database} alt="database-album-cover" /></a>,
    <a href='https://ghostly.bandcamp.com/track/inferno' target='_blank' rel="noreferrer"><img  src={inferno} alt="inferno-single-cover" /></a>  ,
    <a href='https://indexmarcelfengler.bandcamp.com/track/speed' target='_blank' rel="noreferrer"><img  src={speed} alt="speed-single-cover" /></a> ];


/* const galleryImages = [
        {
          img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
]; */
    

const BannerMusic = () => (
    <Parallax 
    blur={{ min: -15, max: 15 }}
    className="bannerMusic" 
    style={{minHeight:"100vh"}}
    bgImage={bannerMusicPicture} 
    // bgImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" 
    bgImageAlt="the cat" 
    opacity={0.9}
    strength={500}>

    <div className='container-fluid d-flex justify-content-center align-items-center flex-column'>
                <div className="col-md-12 container-fluid mt-3 bannerWebContent">
			  <div className="row">
                <h2 className='align-start text-muted mb-4 mt-3 d-flex align-items-center'><i className="medium material-icons me-1">audiotrack</i></h2>
				<div className="col-md-8 pe-1">
                <blockquote class="blockquote" style={{borderColor:'#00aee0'}}>
				<p class="mb-0">
				</p>
				<footer class="blockquote-footer">
				<p className="card-text text-white">Web Developer, Music Producer, Designer, Cook and IT specialist based in Berlin, Germany.</p>
                <p className="card-text text-white">Avid learner, always curious, with a solid international background in customer relations and service, I have specialized in IT and development in the last years.</p>
                <p className="card-text text-white">I come from different experiences in diverse European cities from gastronomy to retail and I am always used to the direct relationship with people.
                I have a strong interest in arts and creativity.Lorem ipsum dolor sit amet, ner, always curious, with a solid international background in customer relations and service, I have specialized in consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, ner, always curious, with a solid international background in customer relations and service, I have specialized in consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, ner, always curious, with a solid international background in customer relations and service, I have specialized in consectetur adipiscing elit. Integer posuere erat a ante.</p>   
                <p className="card-text text-white">
                I have now to bring ideas and the future to you.</p> 
				</footer>
			    </blockquote> 
                <p className="card-text"><small className="text-muted">* As example, this Portfolio page is realized with React and Bootstrap technologies used together.</small></p>
                <div className='d-flex justify-content-center mt-5 mb-5'>
                <Player />
                </div>

				</div>

				<div className="col-md-4 mb-5">
                
                <Carousel slides={slides} autoplay={true} interval={4000} />
                {/* more content on column here */}
                {/* <MusicCards /> */}
                {/* <Player /> */}
                {/* <MusicImageGallery galleryImages={galleryImages} /> */}
                <div className="containerG mt-5">

                  <img className='thumb' src='https://m.media-amazon.com/images/I/51NX+JhRgoL._UX500_FMwebp_QL85_.jpg'/>
                  <img className='thumb' src='https://m.media-amazon.com/images/I/51NX+JhRgoL._UX500_FMwebp_QL85_.jpg'/>
                  <img className='thumb' src='https://m.media-amazon.com/images/I/51NX+JhRgoL._UX500_FMwebp_QL85_.jpg'/>
                  <img className='thumb' src='https://m.media-amazon.com/images/I/51NX+JhRgoL._UX500_FMwebp_QL85_.jpg'/>
                  <img className='thumb' src='https://m.media-amazon.com/images/I/51NX+JhRgoL._UX500_FMwebp_QL85_.jpg'/>
                  <img className='thumb' src='https://m.media-amazon.com/images/I/51NX+JhRgoL._UX500_FMwebp_QL85_.jpg'/>
                  <img className='thumb' src='https://m.media-amazon.com/images/I/51NX+JhRgoL._UX500_FMwebp_QL85_.jpg'/>
                  <img className='thumb' src='https://m.media-amazon.com/images/I/51NX+JhRgoL._UX500_FMwebp_QL85_.jpg'/>
                  <img className='thumb' src='https://m.media-amazon.com/images/I/51NX+JhRgoL._UX500_FMwebp_QL85_.jpg'/>
                  <img className='thumb' src='https://m.media-amazon.com/images/I/51NX+JhRgoL._UX500_FMwebp_QL85_.jpg'/>

                </div>
				</div>

			</div>
		</div>
    </div>
    </Parallax>
);


export default BannerMusic