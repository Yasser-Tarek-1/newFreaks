import React from "react";
import SideBarComponent from "../../components/side-bar/side-bar";
import logo from "../../assets/logo-emp.svg";
import aboutInfoImg from "../../assets/about/about-header.jpg";
import ReactPlayer from "react-player";
//import video from "../../assets/video/video.mp4";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import "./about-page.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="top-section">
        <SideBarComponent />
        <div className="content">
          <Link to="/">
            <div className="logo">
              <img src={logo} />
            </div>
          </Link>
        </div>
      </section>
      <div className="about">
        <div className="title">
          <h3 className="text--uppercase basic--font--family font--weight--700">
            {" "}
            About{" "}
          </h3>
        </div>

        <div className="info">
          <div className="info-img">
            <img src={aboutInfoImg} />
          </div>
          <div className="paragraph">
            <p>
              Freaks of Nature is a series of boutique electronic music and arts
              festivals held throughout the year to provide a unique platform
              for emerging artists, international headliners and local talent.
              <br />
              <br />
              Captivating the audience with a multi-sensory display of dance,
              special effects, stunning visuals and flamboyant costumes and
              colours, Freaks of Nature transcends music and brings together a
              diverse selection of creatives, designers, artists and vendors to
              celebrate our inner Freak.
            </p>
          </div>
        </div>
      </div>

      <div className="missions">
        <div className="title">
          <h3 className="text--uppercase basic--font--family font--weight--700">
            {" "}
            Our Mission{" "}
          </h3>
        </div>
        <div className="video">
          <ReactPlayer
            url={/*video*/'https://media.freaksofnature.me/video/video.mp4'}
            width="100%"
            height={"auto"}
            controls={true}
          />
        </div>

        <div className="paragraph">
          <p>
            Freaks of Nature promotes the organic growth of electronic music in
            Saudi Arabia by introducing fans to new sub genres and
            previously-unseen DJ techniques, and by providing a platform for
            local artists to perform alongside international DJs.
            <br />
            <br />
            The festival aims to teach those with a passion for the music
            industry and guide their journey, whether in DJing, sound
            engineering or production, Freaks of Nature offers unique
            opportunities to develop Saudi talents.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutPage