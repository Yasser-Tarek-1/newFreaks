import React from "react";
import SideBarComponent from "../../components/side-bar/side-bar";
import logo from "../../assets/logo-emp.svg";
import Footer from "../../components/footer/Footer";

import arrowL from "../../assets/blog/arrowL.svg";
import arrowR from "../../assets/blog/arrowR.svg";

import { sliderData } from "../../blogData.js";

import "./blog.css";
import { useState } from "react";

import BlogOne from "../../components/blog-slide/BlogOne";
import BlogTwo from "../../components/blog-slide/BlogTwo";
import BlogThree from "../../components/blog-slide/BlogThree";
import BlogFour from "../../components/blog-slide/BlogFour";
import BlogFive from "../../components/blog-slide/BlogFive";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

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
    if (!Array.isArray(sliderData) || length <= 0) {
      return null;
    }
  }, []);

  React.useEffect(() => {
    const element = document.getElementById("static-bg");
    if (element) {
      element.classList.add("partner-bg");
    }
  }, []);

  React.useEffect(() => {
    return () => {
      const element = document.getElementById("static-bg");
      if (element) {
        element.classList.remove("partner-bg");
      }
    };
  }, []);

  return (
    <div className="blog-page">
      <div className="blog_header">
        <SideBarComponent />
        <div className="pt-6 pb-5 px-4 sm:px-10 sm:pb-24 sm:pt-10 flex items-center justify-between w-full md:w-[55%]">
          <Link to="/">
            <div className="logo">
              <img src={logo} className="w-[80px] sm:w-[120px]" />
            </div>
          </Link>
          <h1 className="text-4xl sm:text-6xl uppercase text-[#fff] font-[stolzi]">
            Blog
          </h1>
        </div>
      </div>
      <div className="w-full">
        <div className="slider_blog px-8">
          <div className="carousel">
            <img
              src={arrowL}
              alt="arrow"
              className="arrow_l"
              onClick={prevSlide}
            />
            <img
              src={arrowR}
              alt="arrow"
              className="arrow_r"
              onClick={nextSlide}
            />
            {sliderData.map((item, i) => {
              const indexLeft = position(current - 1, length);
              const indexRight = position(current + 1, length);
              const indexLeft2 = position(current - 2, length);
              const indexRight2 = position(current + 2, length);

              let className = "";
              if (i === current) {
                className = "card_blog card--active";
              } else if (i === indexRight) {
                className = "card_blog card--right";
              } else if (i === indexLeft) {
                className = "card_blog card--left";
              } else if (i === indexRight2) {
                className = "card_blog card--right--2";
              } else if (i === indexLeft2) {
                className = "card_blog card--left--2";
              } else {
                className = "card_blog";
              }

              return (
                <div className={className} key={item.id}>
                  <h3 className="text-lg text-[#fff] font-[stolzi] max-w-[300px] mb-2 mx-auto text-center">
                    {item.text}
                  </h3>
                  <img src={item.img} alt="blog" className="card_img" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-20 w-full px-4 sm:px-8">
          {current === 0 && <BlogOne />}
          {current === 1 && <BlogTwo />}
          {current === 2 && <BlogThree />}
          {current === 3 && <BlogFour />}
          {current === 4 && <BlogFive />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
