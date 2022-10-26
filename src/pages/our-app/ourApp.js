import React from "react";
import SideBarComponent from "../../components/side-bar/side-bar";
import logo from "../../assets/logo-emp.svg";
import Footer from "../../components/footer/Footer";

import arrowL from "../../assets/blog/arrowL.svg";
import arrowR from "../../assets/blog/arrowR.svg";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ourAppData } from "../../ourAppData";

import app from "../../assets/ourapp/app.svg";
import appStore from "../../assets/ourapp/appStore.svg";
import googleStore from "../../assets/ourapp/googleStore.svg";

import "./ourApp.css";
import { useTranslation } from "react-i18next";

const OurApp = () => {
  const [current, setCurrent] = useState(0);
  const length = ourAppData.length;

  const { i18n } = useTranslation();
  const language = i18n.language;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const position = (n, m) => {
    let result = n % m;
    return result >= 0 ? result : result + m;
  };

  React.useEffect(() => {
    if (!Array.isArray(ourAppData) || length <= 0) {
      return null;
    }
  }, []);

  const imageHandler = () => {
    if (current === 0) {
      return app;
    }
    return app;
  };

  return (
    <div className="blog-page">
      <div className="blog_header">
        <SideBarComponent />
        <div className="pt-6 pb-5 px-4 sm:px-10 sm:pb-24 sm:pt-10 flex items-center justify-between w-full md:w-[70%]">
          <Link to="/">
            <div className="logo">
              <img src={logo} className="w-[80px] sm:w-[120px]" />
            </div>
          </Link>
          <h1 className="text-2xl sm:text-4xl md:text-6xl uppercase text-[#fff] font-[stolzi]">
            EXPLORE OUR APP
          </h1>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-10">
          <div className="lg:max-w-[600px] xl:max-w-[800px] mr-10 mb-8 lg:mb-0">
            <p class="text-white font-[stolzi-light] text-sm sm:text-xl mb-8">
              Create your perfect Schedule, share your favourite artists with
              your mates and discover the incredible food and entertainment on
              offer this app has it all!Create your perfect Schedule, share your
              favourite artists with your mates and discover the incredible food
              and entertainment on offer this app has it all! Create your
              perfect Schedule, share your favourite artists with your mates and
              discover the incredible food and entertainment on offer this app
              has it all!Create your perfect Schedule, share your favourite
              artists with your mates and discover the incredible food and
              entertainment on offer this app has it all!
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <img
                src={appStore}
                alt="appStore"
                className="object-cover max-w-[100px] md:max-w-[150px] mx-2"
              />
              <img
                src={googleStore}
                alt="googleStore"
                className="object-cover max-w-[100px] md:max-w-[150px] mx-2 mb-1"
              />
            </p>
          </div>
          <div className="w-fit relative mx-auto overflow-hidden">
            <div className="app-bg"></div>
            <div className="mx-auto w-fit">
              <img
                src={imageHandler()}
                alt="app"
                className="object-cover max-w-[150px] md:max-w-[250px] mx-auto rounded-[33px] sm:rounded-[34px] md:rounded-[50px] relative left-[4px]"
              />
            </div>
          </div>
        </div>
        <div className="slider_app px-8">
          <div className="carousel-app">
            {ourAppData.map((image, i) => {
              const indexLeft = position(current - 1, length);
              const indexLeft2 = position(current - 2, length);
              const indexRight = position(current + 1, length);
              const indexRight2 = position(current + 2, length);

              let className = "";
              if (i === current) {
                className = "card_app card--active-app";
              } else if (i === indexRight) {
                className = "card_app card--right-app";
              } else if (i === indexLeft) {
                className = "card_app card--left-app";
              } else if (i === indexRight2) {
                className = "card_app card--right-app-2";
              } else if (i === indexLeft2) {
                className = "card_app card--left-app-2";
              } else {
                className = "card_app";
              }
              return (
                <div className={className} key={image.id}>
                  <img src={image.img} alt="app" className="card_img_2" />
                </div>
              );
            })}
          </div>
          <div className="flex justify-center py-4">
            {language == "en" ? (
              <img
                src={arrowL}
                alt="arrow"
                className="arrow_l_app"
                onClick={prevSlide}
              />
            ) : (
              <img
                src={arrowR}
                alt="arrow"
                className="arrow_r_app"
                onClick={nextSlide}
              />
            )}

            <p className="text-white text-xl md:text-xl ml-4 mr-2 text-center">
              Discover
              <br />
              the lineup
            </p>
            {language == "en" ? (
              <img
                src={arrowR}
                alt="arrow"
                className="arrow_r_app"
                onClick={nextSlide}
              />
            ) : (
              <img
                src={arrowL}
                alt="arrow"
                className="arrow_l_app"
                onClick={prevSlide}
              />
            )}
          </div>
        </div>
      </div>
      <div className="w-full mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default OurApp;
