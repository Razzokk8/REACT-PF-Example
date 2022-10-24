import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react';
import Banner1 from './Banner1';

function WebProjects() {
    const ref = useRef()
    
    return (

        <div id='webProjects'>
        {/* <Banner1 ref={ref} /> */}

        <div>
        
        <div>
        <div className="container-fluid">
	<div className="row">
		<div className="col-md-12 mt-5">
			<div className="jumbotron white d-flex row me-2 mt-5">

            <div class="container-fluid">
	        <div class="row">
		    <div class="col-md-8">
            <h2 className='container mt-3'>
					Hello, world!
				</h2>
				<p className='container'>
					This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
				</p>
                <p className='container'>
					This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
				</p>
                <p className='container'>
					This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
				</p>
				<p className='container mt-5'>
					<a className="btn btn-primary btn-large" href="#">Learn more</a>
				</p>
		    </div>
		    <div class="col-md-4">
                            <div>
                       

                            <h2 className='container mt-3'>
					Hello, world!
				</h2>
                <img src="https://images.unsplash.com/photo-1663743669841-b2d7f3ff5049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80" />
				<p className='container'>
					This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
				</p>
                <p className='container'>
					This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
				</p>



                            </div>

		        </div>
	            </div>
                </div>
				
                
                
			</div>
		</div>
	    </div>
        </div>
        </div>
        </div>  
        </div>
    )
}
export default WebProjects