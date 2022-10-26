import React, { useState } from "react";
import { Link } from "react-router-dom";

import SideBarComponent from "../../components/side-bar/side-bar";
import Footer from "../../components/footer/Footer";
import StageForm from "../../components/ruleTheStage/StageForm";
import Modal from "../../components/partenerModal/Modal";

import palm from "../../assets/palm-half-01.svg";
import stageRuleImg from "../../assets/stageRuleImg.png";
import stageRuleImg2 from "../../assets/stageRuleImg2.png";
import freaking3Svg from "../../assets/logo-freaking.svg";
import vector from "../../assets/e3-vector.png";
import fm from "../../assets/e3-fm.svg";

const StageRule = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="w-full">
        <section className="w-full">
          <SideBarComponent />
          <img
            src={palm}
            alt="palm"
            className="w-full absolute md:mt-[-25px] z-10"
          />
          <div className="pt-10 sm:pt-14 md:pt-20 lg:pt-32 xl:pt-44 relative z-20">
            <Link to="/">
              <div>
                <img
                  src={freaking3Svg}
                  alt="/"
                  className="w-[100px] sm:w-[150px] md:w-[220px] mx-auto"
                />
              </div>
            </Link>
            <div className="mt-4 sm:mt-10 mx-auto">
              <img
                src={stageRuleImg}
                alt="/"
                className="mx-auto w-[75%] md:w-[60%]"
              />
            </div>
            <p className="w-[90%] md:w-[50%] mx-auto mt-4 sm:mt-8 text-white font-[stolzi-light] text-sm sm:text-xl text-center">
              Calling the freakiest DJs out there! Are you the next electronic
              music sensation? Show us what you’ve got, and you could be
              performing live at Freaks of Arabia
            </p>
          </div>
        </section>
        <div className="w-full py-8 md:p-16 relative z-20">
          <div className="w-full px-8">
            <img
              src={vector}
              alt="/"
              className="w-[150px] sm:w-[150px] md:w-[300px] mx-auto"
            />
            <img
              src={fm}
              alt="/"
              className="w-[120px] sm:w-[150px] md:w-[200px] mx-auto mt-2"
            />
          </div>
          <div className="flex px-8 items-center justify-between flex-col md:flex-row">
            <div className="max-w-[700px] my-8 md:my-0 md:mr-8">
              <h3 className="text-white font-[stolzi] font-bold text-2xl md:text-4xl uppercase">
                About THE competition:
              </h3>
              <p className=" text-white font-[stolzi-light] text-sm sm:text-xl mt-4 mb-14">
                Freaks of Nature and MixFM have teamed up to give talented DJs
                the chance to shine and perform live at Freaks of Arabia
              </p>
              <h3 className="text-white font-[stolzi] font-bold text-2xl md:text-4xl uppercase">
                Requirments:
              </h3>
              <p className=" text-white font-[stolzi-light] text-sm sm:text-xl mt-4 mb-4">
                We want you to show off your skills, whether on the decks, on
                the mic or creating a unique mash-up
              </p>
              <p className=" text-white font-[stolzi-light] text-sm sm:text-xl mt-4 mb-14">
                Just record and submit a 60 min set and you could be playing at
                the next episode of Freaks of Nature
              </p>
              <h3 className="text-white font-[stolzi] font-bold text-2xl md:text-4xl uppercase">
                Winners get:
              </h3>
              <div className="text-white mt-4">
                <p className="flex items-center text-white font-[stolzi-light] text-sm sm:text-base my-2">
                  <span className="w-2 h-2 bg-white block rounded-full mr-2"></span>
                  60 mins slot of performing
                </p>
                <p className="flex items-center text-white font-[stolzi-light] text-sm sm:text-base my-2">
                  <span className="w-2 h-2 bg-white block rounded-full mr-2"></span>
                  2x Tickets to Freaks of Araveia
                </p>
                <p className="flex items-center text-white font-[stolzi-light] text-sm sm:text-base my-2">
                  <span className="w-2 h-2 bg-white block rounded-full mr-2"></span>
                  Artist Artwork{" "}
                </p>
              </div>
              <button
              onClick={()=>setModal(true)}
              className="block mx-auto md:mx-0 bg-white rounded-[10px] font-[stolzi] py-3 px-20 mt-14  shadow-md hover:text-white hover:bg-[#ED1E70] transition-all duration-300 ease-in">
                Enter Now
              </button>
            </div>
            <div>
              <img
                src={stageRuleImg2}
                alt="stageRuleImg2"
                className="max-w-full object-cover max-h-[900px]"
              />
            </div>
          </div>
          <div className="w-full px-4 sm:px-8 pt-20 pb-40">
            <h3 className="text-white font-[stolzi] font-bold text-3xl md:text-5xl mx-auto w-fit">
              Timeline
            </h3>
            <div className="w-full mt-32 sm:mt-44">
              <div className="w-full">
                <div className="relative">
                  <p className="absolute  text-white font-[stolzi] text-[12px] sm:text-sm lg:text-lg top-[-60px] sm:top-[-85px] rotate-[-35deg]  left-[3%]">
                    Submission Open
                  </p>
                  <p className="absolute  text-white font-[stolzi] text-[12px] sm:text-sm lg:text-lg top-[-60px] sm:top-[-85px] rotate-[-35deg] left-[25%]">
                    Submission Close
                  </p>
                  <p className="absolute  text-white font-[stolzi] text-[12px] sm:text-sm lg:text-lg top-[-72px] sm:top-[-100px] rotate-[-35deg] left-[50%]">
                    Winners Announcement
                  </p>
                  <p className="absolute  text-white font-[stolzi] text-[12px] sm:text-sm lg:text-lg top-[-75px] sm:top-[-92px] rotate-[-35deg]  left-[75%] ">
                    E3:Freaks of Arabia
                  </p>
                </div>
              </div>
              <div className="border-[#fff] border-[3px] my-3 rounded-sm flex relative justify-between">
                <span className="top-[-17px] w-8 absolute h-8 bg-[#E66329] block rounded-full mr-2  left-[3%]"></span>
                <span className="top-[-17px] w-8 absolute h-8 bg-[#E66329] block rounded-full mr-2 left-[25%]"></span>
                <span className="top-[-17px] w-8 absolute h-8 bg-[#E66329] block rounded-full mr-2 left-[50%]"></span>
                <span className="top-[-17px] w-8 absolute h-8 bg-[#E66329] block rounded-full mr-2  left-[75%]"></span>
              </div>
              <div className="relative mt-4">
                <p className="absolute  text-white font-[stolzi-light] text-sm sm:text-lg  left-[1.5%] flex flex-col items-center">
                  October
                  <span className="font-bold text-xl md:text-4xl">18th</span>
                </p>
                <p className="absolute  text-white font-[stolzi-light] text-sm sm:text-lg  left-[23.5%] flex flex-col items-center">
                  October
                  <span className="font-bold text-xl md:text-4xl">22nd</span>
                </p>
                <p className="absolute  text-white font-[stolzi-light] text-sm sm:text-lg  left-[48.5%] flex flex-col items-center">
                  October
                  <span className="font-bold text-xl md:text-4xl">26th</span>
                </p>
                <p className="absolute  text-white font-[stolzi-light] text-sm sm:text-lg  left-[73%] flex flex-col items-center">
                  November
                  <span className="font-bold text-xl md:text-4xl">
                    3<span className="text-sm">rd</span>&
                    <span className="mr-[2px]"></span>4
                    <span className="text-sm">th</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <Modal onSetModal={setModal}>
          <StageForm onSetModal={setModal} />
        </Modal>
      )}
      <Footer />
    </>
  );
};

export default StageRule;
