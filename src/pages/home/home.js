import React from 'react'
import { useDispatch } from "react-redux";

import EventsComponent from '../../components/events/events'
import ExploreMoreComponent from '../../components/explore-more/explore-more'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ReliveComponent from '../../components/relive/relive'
import { go2Step1 } from "../../redux/slices/ticketSlice";
import PartnerComponent from '../../components/partenersHome/PartnerComponent'

const HomePage =()=> {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(go2Step1());
  })

  return (
    <> 
    <Header />
    <EventsComponent />
    <ReliveComponent />
    <ExploreMoreComponent />
    <PartnerComponent/>
    <Footer />
    {/* <LineUp /> */}
    {/* <AboutFON /> */}
    {/* <Steps /> */}
    {/* <Tickets /> */}
    </>
  )
}
export default HomePage