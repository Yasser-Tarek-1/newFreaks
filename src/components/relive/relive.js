import React from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

//import AllAftermovie from "../../assets/video/e2-video.mp4";
import playBtn from "../../assets/icons/play-button.png";

import "./relive.css";

const ReliveComponent = () => {
  const [showControls, setShowControls] = React.useState(false);
  const [play, setPlay] = React.useState(false);
  const onPlay = () => {
    setPlay(true);
    setShowControls(true);
  };
  const language = useSelector((state) => {
    return state.language.language;
  });
  return (
    <div className="relive-component">
      <div className="heading">
        <div className="title">
          <h3> {language === "ar" ? "إسترجاع" : "Relive"} </h3>
        </div>
      </div>
      <div className="content">
        <div className="video-container">
          <div
            className="play"
            onClick={onPlay}
            style={{ display: showControls ? "none" : "block" }}
          >
            <img src={playBtn} className="cursor-pointer" />
          </div>
          <ReactPlayer
            url={'https://media.freaksofnature.me/video/e2-video.mp4'}
            controls={showControls}
            playing={play}
            height={"auto"}
            width="100%"
          />
        </div>
        <div className="info">
          <p>
            Replay your favourite moments from previous Freaks of Nature
            festivals and explore sets, after-movies and performances with our
            new Relive platform.
          </p>
          <p className="btn_none">
            {language === "ar" ? "قريباً" : "Coming Soon"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReliveComponent;
