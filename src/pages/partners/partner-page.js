import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import SideBarComponent from "../../components/side-bar/side-bar";
import Footer from "../../components/footer/Footer";
import Modal from "../../components/partenerModal/Modal";
import DjRegistration from "../../components/formsRegistration/DjRegistration"
import ArtistRegistration from "../../components/formsRegistration/ArtistRegistration"
import VendorRegistration from "../../components/formsRegistration/VendorRegistration"

import logo from "../../assets/logo-emp.svg";
import info1 from "../../assets/partners/1.jpg";
import info2 from "../../assets/partners/2.jpg";
import info3 from "../../assets/partners/3.jpg";
import info4 from "../../assets/partners/4.jpg";

import "./partner-page.css";

const PartnerPage = () => {
  const [modal, setModal] = useState(false)
  const [who, setWho] = useState("")
  const [bodyDir, setBodyDir] = useState(document.body.dir);
  
  const modalForm = (e) => {
    setWho(e.target.id)
    setModal(true)
  }

  React.useEffect(() => {
    const element = document.getElementById('static-bg');
    if (element) {
      element.classList.add('partner-bg')
    }
  }, [])

  React.useEffect(() => {
    return () => {
      const element = document.getElementById('static-bg');
      if (element) {
        element.classList.remove('partner-bg')
      }
    }
  }, [])

  return (
    <div className="partner-page relative">
      {modal
        &&
        <Modal onSetModal={setModal}>
          {
            who === "artist" ? <ArtistRegistration onSetModal={setModal} /> :
              who === "dj" ? <DjRegistration onSetModal={setModal} /> :
                <VendorRegistration onSetModal={setModal} />
          }
        </Modal>
      }
      <section className="top-section">
        <SideBarComponent />
        <div className="content">
          <Link to="/">
            <div className="logo">
              <img src={logo} />
            </div></Link>
        </div>
      </section>
      <div className="partner">
        <div className="title">
          <h3 className="text--uppercase basic--font--family font--weight--700">
            Partner With Us
          </h3>
        </div>
        <div className="info">
          <div className="card" style={{ background: `url(${info1})` }}>
            <div className="info-title">
              <h3> DJs </h3>
            </div>

            <div className="info-content">
              <p>
                If you want to get freaky and perform at Freaks of Nature,
                please register with us:
              </p>
              <button
                onClick={modalForm}
                className="btn btn-outline-light uppercase" id="dj">DJ Registration</button>
            </div>
          </div>
          <div className="card" style={{ background: `url(${info2})` }}>
            <div className="info-title">
              <h3> Artists </h3>
            </div>
            <div className="info-content">
              <p>
                Shout out to any artists! If you want to exhibit at Freaks of Nature, please contact us:
              </p>
              <button onClick={modalForm}
                className="btn btn-outline-light uppercase" id="artist">Artist Registration</button>
            </div>
          </div>
          <div className="card" style={{ background: `url(${info3})` }}>
            <div className="info-title">
              <h3> Vendors </h3>
              <span> F&B/Merchants/
                <br />
                Clothing stores </span>
            </div>
            <div className="info-content">
              <p>
                Want to reach hundreds of new customers at Saudi Arabia’s most vibrant festival? Register with us and be part of Freaks of Nature:
              </p>
              <button onClick={modalForm}
                className="btn btn-outline-light uppercase" id="vendor">Vendor Registration</button>
            </div>
          </div>
          <div className="card" style={{ background: `url(${info4})` }}>
            <div className="info-title">
              <h3> All Other </h3>
              <h4> COLLABORATION </h4>
            </div>
            <div className="info-content">
              <p>
                Send an email to
              </p>
              <p className="email"> hello@freaksofnature.me</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PartnerPage