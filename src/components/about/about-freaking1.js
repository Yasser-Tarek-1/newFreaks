import React from 'react';

import Slider from "react-slick";
import ReactPlayer from 'react-player';
//import video from '../../assets/video/video.mp4';

import e1One from "../../assets/e1-one.jpg"
import e1Two from "../../assets/e1-two.jpg"
import e1Three from "../../assets/e1-three.jpg"

import './about-freaking1.css';

const  AboutFreaking1 =() =>{

  const settings = {
    dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2.4,
  slidesToScroll: 1
  };


  return (
    <div className='about-freaking1-component'>
         <div className='title'>
            <h3 className='basic--font--family font--2/5rem text--uppercase font--weight--700'> 
                 About E1
            </h3>
        </div>
        <div className='slider'>
        <Slider  {...settings}>
          {/* <div className='mx--20' style={{margin:'0 20px', overflow:'hidden'}}>
          <ReactPlayer height={"auto"}  width={'100%'} url={video} controls={true} />
          </div> */}
          <div className='rounded-xl outline-0' style={{overflow:'hidden'}}>
            <img src={e1One} className="w-full rounded-xl mx-6" alt="/"/>
          </div>
          <div className='rounded-xl outline-0' style={{overflow:'hidden'}}>
            <img src={e1Two} className="w-full rounded-xl mx-6" alt="/"/>
          </div>
          <div className='rounded-xl outline-0' style={{overflow:'hidden'}}>
            <img src={e1Three} className="w-full rounded-xl mx-6" alt="/"/>
          </div>
        </Slider>
        </div>
    </div>
  )
}


export default AboutFreaking1