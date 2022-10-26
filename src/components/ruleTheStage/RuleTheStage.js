import React from "react";
import { Link } from "react-router-dom";

import vector from "../../assets/e3-vector.png";
import fm from "../../assets/e3-fm.svg";

const RuleTheStage = () => {
  return (
    <div className="w-[90%] mx-auto mt-[90px]">
      <div className="flex items-center justify-around flex-col md:flex-row">
        <div className="flex items-center  flex-col md:mr-20">
          <img
            src={vector}
            alt="vector"
            className="max-w-[250px] md:max-w-[300px]"
          />
          <img src={fm} alt="fm" className="max-w-[150px] md:max-w-[200px]" />
        </div>
        <div className="max-w-[600px]">
          <p className="text-white font-[stolzi-light]  text-[1.3rem]">
            Calling the freakiest DJs out there! Are you the next electronic
            music sensation? Show us what you’ve got, and you could be
            performing live at Freaks of Arabia
          </p>
          <h3 className="text-white font-[stolzi] font-bold text-2xl md:text-3xl uppercase mt-6 mb-4">
            About THE competition:
          </h3>
          <p className="text-white font-[stolzi-light]  text-[1.3rem]">
            Freaks of Nature and MixFM music have teamed up to give talented
            DJs the chance to shine and perform live at Freaks of Arabia
          </p>
          <Link to="/rulethestage">
            <button className="block mx-auto md:mx-0 bg-white rounded-[10px] font-[stolzi] py-3 px-20 mt-14  shadow-md hover:text-white hover:bg-[#ED1E70] transition-all duration-300 ease-in">
            Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RuleTheStage;
