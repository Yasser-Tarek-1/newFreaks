import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import searchIcon from "../../assets/searchIcon.svg";
import { reliveVideosData } from "../../reliveData";
import ReactPlayer from "react-player";
import playBtn from "../../assets/icons/play-button.png";

const ReliveVideos = () => {
  const [videos, setVideos] = useState([]);
  const [input, setInput] = useState("");
  const [showControls, setShowControls] = React.useState(false);
  const [play, setPlay] = React.useState("");
  const onPlay = (title) => {
    setPlay(title);
    setShowControls(title);
    console.log(title);
  };

  const searchInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setVideos([...reliveVideosData]);
  }, []);

  const handelFilterNames = () => {
    if (input.length !== 0) {
      return videos.filter((e) => {
        return e.title.toLowerCase().includes(input.toLowerCase());
      });
    }
    return videos;
  };

  return (
    <div className="w-full py-10 sm:py-16">
      <div className="flex items-center border-[1px] border-white px-4 py-1 bg-white  rounded-[12px] w-full lg:w-[47%]">
        <p>
          <img
            src={searchIcon}
            alt="searchIcon"
            className="text-white w-[22px]"
          />
        </p>
        <input
          type="text"
          placeholder="Search Artists"
          onChange={searchInput}
          className="outline-none border-0 focus:ring-0  rounded-[12px] ml-2 w-full"
        />
      </div>
      <div className="py-10">
        <div className="w-full sm:grid-cols-2 lg:grid-cols-4 grid gap-10 justify-center items-center">
          {handelFilterNames()?.map(({ video, title, id }) => {
            return (
              <div className="video-container relative rounded-xl" key={id}>
                <div
                  className="play_com"
                  onClick={() => onPlay(title)}
                  style={{ display: showControls === title ? "none" : "block" }}
                >
                  <img src={playBtn} className="cursor-pointer" />
                </div>
                <ReactPlayer
                  url={video}
                  controls={showControls === title}
                  playing={play === title ? true : false}
                  height={"auto"}
                  width="100%"
                  className="react-player"
                />
                <div
                  style={{ display: showControls === title ? "none" : "block" }}
                  className={
                    title == "video1" || title == "video9" || title == "video17"
                      ? "absolute bg-black	 w-full h-full left-0 top-0 rounded-xl"
                      : "absolute bg-gradient-to-r  from-black to-transparent	 w-full h-full left-0 top-0 rounded-xl"
                  }
                >
                  <p className="text-white font-[stolzi-light] text-[10px] uppercase p-3 w-fit ml-auto select-none">
                    Fon:E2
                  </p>
                  <p className=" p-3 flex flex-col w-fit mr-auto select-none bottom-0 absolute">
                    <span className="text-white font-[stolzi] text-xs uppercase">
                      Wedaminz
                    </span>
                    <span className="text-white font-[stolzi-light] text-[9px] uppercase">
                      MAINSTAGE
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReliveVideos;
