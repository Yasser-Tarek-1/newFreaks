import React from 'react';
import FreaksOfNature from '../../components/header/FreaksOfNature';
import freakTest from '../../assets/freak-test-01.svg';
import AboutFreakingTwo from '../../components/about/about-freaking2';
import Artists from '../../components/lineup/Artists';
import AfterMovie from '../../components/about/AfterMovie';
import Footer from '../../components/footer/Footer';
import SideBarComponent from '../../components/side-bar/side-bar';
import group from "../../assets/about/Group 166.svg"

import zigZag from '../../assets/zigzag-01.svg'
import LineUp from '../../components/lineup/LineUp';
import AboutFON from '../../components/about/AboutFON';
import Hand from '../../components/about/Hand';

import './freaking-f2.css';

const FreakingFTwo = () => {
    return (
        <div className='freaking-f2-component'>
            <SideBarComponent />
            <section>
                <div>
                    <img src={group} className="group" />
                    <div className='logo'>
                        <FreaksOfNature />
                    </div>
                    <div className='freak-test'>
                        <img src={freakTest} />
                    </div>
                    <div className='info'>
                        <h3 className='basic--font--family text--uppercase'>
                            2 Stages - Art Exhibition
                            <br />
                            Camping - Pop ups
                        </h3>
                    </div>
                </div>
            </section>
            <div>
                <AboutFreakingTwo />
            </div>
            <div className='info'>
                <p className='paragraph'>
                    Riyadh got freaky again when Freaks of Nature returned with a sensory overload of dance, special effects, and a set list packed with local artists and headlined by two huge international acts on two stages. The best 4-deck DJ in the world, James Hype (UK) and the mash-up king, WeDamnz (The Netherlands) amazed the crowds and closed each night of the two-night show in style.

                    <br />
                    <br />
                    The event also featured an art exhibition, camping and pop ups, showcasing local artists and designers, including a live wall painting, an art installation and a pop-up concept store featuring local clothing brands.
                </p>
            </div>
            <div className='lineup'

            >
                <div className='title'>
                    <h3 className='font--weight--700 basic--font--family text--uppercase  text-light'> Lineup</h3>
                </div>
                <Artists />
            </div>
            <div className='after-movie'>
                <div className='title'>
                    <h3 className='font--weight--700 basic--font--family text--uppercase text-light'> AfterMovie </h3>
                </div>
                <div className='content_after'>
                    <AfterMovie />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FreakingFTwo