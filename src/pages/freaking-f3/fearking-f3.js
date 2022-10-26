import React from 'react'
import ReactPlayer from 'react-player';

import Footer from '../../components/footer/Footer'
import ArtistSVG from '../../components/lineup/ArtistSVG';
import FAQComponent from '../../components/faq/faq';
import MainTickets from '../../components/tickets/main-tickets';
import SideBarComponent from '../../components/side-bar/side-bar';
import RuleTheStage from '../../components/ruleTheStage/RuleTheStage';

//import Header from '../../components/header/Header';
//import Hand from '../../components/about/Hand';
//import Ticket from '../../components/tickets/step2/Ticket';
//import Tickets from '../../components/tickets/Main';
//import ScrollToTop from '../../ScrollToTop';


import freaking3Svg from '../../assets/logo-freaking.svg';
//import e3 from "../../assets/video/e3-video.mp4"
import playBtn from '../../assets/icons/play-button.png';

//import E3Logo from "../../components/header/E3Logo"

import './freaking-f3.css';

const FreakingFThree = () => {
    const [showControls, setShowControls] = React.useState(false);
    const [play, setPlay] = React.useState(false);
    const onPlay = () => {
        setPlay(true);
        setShowControls(true);
    }

    return (
        <>
            <div className='fearking-f3-component'>
                <section className='top-section'>
                    <SideBarComponent />
                    <div className='max-w-[250px] sm:max-w-[400px] pt-[160px] mx-auto'>
                        { <img src={freaking3Svg} /> }
                    </div>
                    <div className='about'>
                        <div className='row items-center'>
                            <div className='col-md-6'>
                                <div className='content-vi relative'>
                                    <div className='absolute z-10 w-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]' onClick={onPlay} style={{ display: showControls ? 'none' : 'block' }}>
                                        <img src={playBtn} className="cursor-pointer" />
                                    </div>
                                    <ReactPlayer url={'https://media.freaksofnature.me/video/e3-video.mp4'} controls={showControls} playing={play} height={"auto"}
                                        style={{ zIndex: 0, borderRadius: "12px" }}
                                        width="100%"
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                {/* <div className='title'>
                                    <h3> About E3 </h3>
                                </div> */}
                                <p>
                                    Freaks of Araveia takes the festival scene to the next level with three stages and 10 international acts over two nights,
                                    live art shows, exhibitions and local designers. Coming soon! Don’t miss out.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='artist-words'>
                    <div className='title'>
                        <h3> Line up </h3>
                    </div>
                    <div className='content_art'>
                        <ArtistSVG />
                    </div>
                </div>
                <MainTickets />
                <RuleTheStage />
                <FAQComponent />
            </div>
            <Footer />
        </>
    )
}

export default FreakingFThree