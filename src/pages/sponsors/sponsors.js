import React from 'react'
import SideBarComponent from '../../components/side-bar/side-bar';
import Footer from '../../components/footer/Footer';

import logo from '../../assets/logo-emp.svg';

import "./sponsors.css"

const Sponsors = () => {
  return (
    <div className="sponsors-page">
      <div className='sponsors_header'>
        <SideBarComponent />
        <div className="content">
          <div className="logo">
            <img src={logo} width="120px" />
          </div>
          <h1>Sponsors</h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Sponsors