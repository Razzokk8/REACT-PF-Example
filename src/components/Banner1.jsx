import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react';




function Banner1() {
    
    const ref = useRef()

    return (

        <div id='banner1' className='p-0 m-0'>
        <Parallax pages={2} ref={ref} >
        
        <ParallaxLayer offset={0} speed={0.5} >
        <div>
          <div className='laYer'>
              <h1 className='inDice m-5 black text-muted ps-3'>Web </h1>
          </div>
          
          {/* <p>Layers can contain anything</p> */}
  
          </div>
        </ParallaxLayer>
  
         <ParallaxLayer offset={1} speed={-2} factor={1.5} horizontal />
  
        <ParallaxLayer sticky={{ start: 1, end: 2 }} />
          
         <ParallaxLayer offset={2} speed={1}>
          {/* <button onClick={() => ref.current.scrollTo(0)}>Scroll to top</button> */}
        </ParallaxLayer>  
      </Parallax>
        </div>
    )
}
export default Banner1