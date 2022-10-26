import React from 'react';
import './freaking-f1.css';
import freakingE1 from '../../assets/freaking-e1.png';
import AboutFreaking1 from '../../components/about/about-freaking1';
import ReactPlayer from 'react-player';
//import video from '../../assets/video/video.mp4';
import Footer from '../../components/footer/Footer';
import SideBarComponent from '../../components/side-bar/side-bar';

 const FreakingFOne=()=> {
  return (
    <div className="freaking-1-component">
      <SideBarComponent/>
        <section>
            <div>
            <div className='logo'>
                <img src={freakingE1} />
                </div>
            </div>
        </section>

        <div className='about'>
            <AboutFreaking1 />
        </div>
        <div className='info'>
           <p className='paragraph'>
           The first Freaks of Nature was an experience never seen before in the country. Local DJs performed to a capacity crowd then teamed up to play back-to-back sets that kept the crowd jumping all night long.
            <br />
            <br />
            Freaks of Nature was part of the XP Music Conference, an annual three-day music conference organized by MDL Beast in Riyadh which aims to lay the building blocks for a thriving music industry. With workshops, panel discussions, networking opportunities and multiple nightlife activations, XP will expand pathways for music industry professionals to experience, explore and express in amplifying music futures.
           
           </p>
       </div>
       <div className='after-movie'>
       <div className='title'>
               <h3 className='font--weight--700 basic--font--family text--uppercase text-light text_h3'> AfterMovie </h3>
        </div>

        <div className='content'>
            <div className='video'>
          <ReactPlayer height={"auto"}  width={'100%'} url={'https://media.freaksofnature.me/video/video.mp4'} controls={true} />
            </div>
        </div>
       </div>
       <Footer />
    </div>
  )
}


export default FreakingFOne

