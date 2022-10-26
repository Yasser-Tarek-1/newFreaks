import React from 'react'
import SideBarComponent from '../../components/side-bar/side-bar';
import logo from '../../assets/logo-emp.svg';
import Footer from '../../components/footer/Footer';

import "./event.css"

const Event = () => {
  return (
    <div className="event-page">
      <div className='event_header'>
        <SideBarComponent />
        <div className="content">
          <div className="logo">
            <img src={logo} width="120px" />
          </div>
          <h1>event</h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Event