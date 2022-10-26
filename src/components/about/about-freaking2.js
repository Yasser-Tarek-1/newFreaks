import React from "react";

import Slider from "react-slick";
//import video from "../../assets/video/video.mp4";
import ReactPlayer from "react-player";

import e2One from "../../assets/e2-1.jpg";
import e2Two from "../../assets/e2-2.jpg";
import e2Three from "../../assets/e2-3.jpg";

import { sliderData } from "../../blogData";

import "./about-freaking2.css";

const AboutFreakingTwo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.4,
    slidesToScroll: 1,
  };

  return (
    <div className="about-freaking2-component">
      <div className="title">
        <h3 className="basic--font--family font--2/5rem text--uppercase font--weight--700">
          About E2
        </h3>
      </div>
      <div className="slider">
        <Slider {...settings}>
          {/* <div className='mx--20' style={{margin:'0 20px', overflow:'hidden'}}>
          <ReactPlayer height={"auto"}  width={'100%'} url={video} controls={true} />
          </div> */}
          <div className="rounded-xl  outline-0" style={{ overflow: "hidden" }}>
            <img src={e2One} className="w-full rounded-xl mx-6" alt="/" />
          </div>
          <div className="rounded-xl  outline-0" style={{ overflow: "hidden" }}>
            <img src={e2Two} className="w-full rounded-xl mx-6" alt="/" />
          </div>
          <div className="rounded-xl  outline-0" style={{ overflow: "hidden" }}>
            <img src={e2Three} className="w-full rounded-xl mx-6" alt="/" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AboutFreakingTwo;
