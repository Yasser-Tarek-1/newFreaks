import React from "react";

import SideBarComponent from "../../components/side-bar/side-bar";
import Footer from "../../components/footer/Footer";

import logo from "../../assets/logo-emp.svg";

import "./relive.css";

import { Link } from "react-router-dom";

import ReactPlayer from "react-player";
import playBtn from "../../assets/icons/play-button.png";

import ReliveVideos from "../../components/relive-videos/ReliveVideos";

const Relive = () => {
  const [showControls, setShowControls] = React.useState(false);
  const [play, setPlay] = React.useState(false);
  const onPlay = () => {
    setPlay(true);
    setShowControls(true);
  };

  React.useEffect(() => {
    const element = document.getElementById("static-bg");
    if (element) {
      element.classList.add("relive-bg");
    }
  }, []);

  
  React.useEffect(() => {
    return () => {
      const element = document.getElementById("static-bg");
      if (element) {
        element.classList.remove("relive-bg");
      }
    };
  }, []);

  return (
    <div className="relive-page">
      <div className="w-full">
        <SideBarComponent />
        <div className="px-4 pt-6 sm:pt-10 pb-4 sm:px-10 flex items-center justify-between w-full md:w-[55%]">
          <Link to="/">
            <div className="relive">
              <img src={logo} className="w-[80px] sm:w-[120px]" />
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full p-4 lg:p-10">
        <h3 className="text-4xl sm:text-6xl uppercase text-[#fff] font-[stolzi]">
          Relive
        </h3>
        <div className="w-full flex items-center justify-between mt-6 sm:mt-10 flex-col lg:flex-row">
          <div className="w-full rounded-xl">
            <div className="video-container relative rounded-xl">
              <div
                className="play"
                onClick={onPlay}
                style={{ display: showControls ? "none" : "block" }}
              >
                <img src={playBtn} className="cursor-pointer" />
              </div>
              <ReactPlayer
                url={"https://media.freaksofnature.me/video/e2-video.mp4"}
                controls={showControls}
                playing={play}
                height={"auto"}
                width="100%"
                className='react-player'
              />
              <div
                style={{ display: showControls ? "none" : "block" }}
                className="absolute bg-black w-full h-full left-0 top-0 rounded-xl"
              >
                <p className="text-white font-[stolzi-light] text-sm uppercase sm:p-5 p-3 w-fit ml-auto select-none">
                  Fon:E2
                </p>
                <p className="sm:p-5 p-3 flex flex-col w-fit mr-auto select-none bottom-0 absolute">
                  <span className="text-white font-[stolzi] text-lg uppercase">
                    Wedaminz
                  </span>
                  <span className="text-white font-[stolzi-light] text-sm uppercase">
                    MAINSTAGE
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-6 lg:mt-0 lg:mx-16">
            <p className="text-white font-[stolzi-light] sm:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            {/* <Link to="/"> */}
              <button className="ml-auto text-white border-[1px] bg-transparent block rounded-[10px] font-[stolzi] py-2 px-10 sm:px-16 mt-6 sm:mt-10  shadow-md hover:text-black hover:bg-[#fff] transition-all duration-300 ease-in">
                Explore More
              </button>
            {/* </Link> */}
          </div>
        </div>
        <div className="w-full">
          <ReliveVideos/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Relive;
