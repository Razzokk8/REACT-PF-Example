import React from 'react';
import { Parallax, Background } from 'react-parallax'
import fsfgs from '../assets/Images/wall2.jpeg'

const Banner2 = () => (
    
/*     <Parallax
        blur={{ min: -10, max: 15 }}
        // bgImage={require('../assets/Images/wall2.jpeg')}
        // bgImageAlt="the dog"
        strength={400}
        className="mt-5 d-flex justify-content-center align-items-center"
    >
    
         <a><h2>rayyenhgckh
        f</h2></a> 
            
            // <Background  className="custom-bg mt-5 ">
            // <img src="https://riccardo-l-porttfolio.netlify.app/images/dunk-berlin.png"
             alt='yioporcone'
             className='mt-5 sneakD image-fluid' />
             </Background>
             <div style={{height:"60vh"}}/>
            
        

        
       
    </Parallax>  */

    <Parallax  
    className='h-100'
    // bgImage={fsfgs}
    renderLayer={percentage => (
        <div
      
            style={{

                position: 'absolute',
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: '0%',
                top: '50%',
                width: percentage * 500,
                height: "100px",
            }}
        >
            <h1>ciao piero</h1>
            <p className='m-5 p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales facilisis erat, vel consequat risus dapibus sed. Aliquam quis arcu nibh. Vivamus ultricies felis non ipsum accumsan aliquam. Fusce ornare enim eu varius vehicula. Duis eget eros commodo, tristique risus quis, lobortis sem. Nullam et rutrum nisl. Nunc condimentum posuere nibh, suscipit congue purus hendrerit eu. Ut eu nulla id elit tempor porttitor.

Duis quis tellus in odio convallis imperdiet sit amet convallis augue. Nam varius mollis gravida. Pellentesque mattis porta mollis. Nullam dapibus consequat dapibus. Donec tempus sem massa, in euismod orci eleifend in. Etiam scelerisque purus augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Morbi sagittis, lacus ut placerat finibus, metus nunc posuere lacus, at condimentum leo sapien sit amet ligula. Donec convallis diam eget elit dignissim, nec commodo eros gravida. Curabitur a lacinia libero, id tincidunt risus. Aenean hendrerit lectus urna, molestie varius erat condimentum vel. Donec bibendum dolor ipsum, sit amet cursus lorem volutpat ut. Praesent dignissim sollicitudin eros non tempor. Curabitur venenatis ante non risus tincidunt efficitur. Sed sit amet placerat lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas faucibus sit amet eros nec viverra. Vivamus eu scelerisque est. Nulla a felis efficitur, porttitor tellus nec, pulvinar quam. Etiam dictum, libero ut mattis varius, odio nisl vehicula nisi, a fermentum nisi turpis nec sapien. Integer vitae mi vitae ante dapibus maximus nec at sapien. Etiam efficitur turpis in mattis porttitor. Aliquam eget metus id nunc varius consequat a vel mauris.

Nulla vehicula lacus vel metus semper, in pharetra nisi vehicula. Morbi a aliquam sapien. Integer blandit quis lorem facilisis pharetra. Nullam finibus finibus massa, et lacinia nibh congue semper. Morbi eleifend, mauris eget euismod laoreet, erat quam bibendum diam, quis vehicula mi magna ut quam. Nullam luctus aliquet luctus. Nulla eleifend neque vel magna interdum, hendrerit vehicula metus pulvinar. Nullam nec elit id tellus imperdiet gravida ac sit amet elit. Nulla ut elit tellus. Praesent finibus imperdiet ex.

Vestibulum venenatis aliquet metus, quis interdum ligula ornare sit amet. Aenean ac faucibus nisl, ac sodales odio. Nunc tincidunt suscipit ante eu posuere. Aliquam urna leo, facilisis sed massa in, ultrices feugiat metus. Fusce mauris leo, viverra eu arcu nec, dapibus imperdiet libero. Donec scelerisque ligula non eros fermentum dignissim. Integer et felis volutpat, molestie erat mattis, pellentesque urna. Morbi cursus congue fringilla. Maecenas diam mi, volutpat in faucibus ut, commodo non arcu.</p>
        </div>
    )}
>
    <p>... Contentc lorem*$</p>
</Parallax>
);

export default Banner2