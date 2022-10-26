import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import signerSvg from '../../assets/singer.png';
import partySvg from '../../assets/party.png';
import logoEmptSvg from '../../assets/logo-emp.svg';
import logoE2Svg from '../../assets/logo-e2.svg';
import logoFreakingSvg from '../../assets/logo-freaking.svg';
import logoXpSvg from '../../assets/logo-xp.svg';

import './event.css';

const  EventsComponent =()=> {

    const language = useSelector((state) => {
        return state.language.language;
    });
    return (
        <div className='event-component' id="events">
            <div className='mobile-heading'>
                <h3> <span> {language === 'ar' ? "الاحداث" : "Events"} </span> </h3>
            </div>
            <div className='grid-contents'>
                <div className='col col_one'>
                    <h3> <span> {language === 'ar' ? "الاحداث" : "Events"} </span> </h3>
                </div>
                <div className='parent'>
                    <div className='col col_two'>
                        <div className='upcoming-title'>
                            <strong> {language === 'ar' ? "القادم" : "Upcoming"} </strong>
                        </div>
                        <div className='upcoming-info'>
                            <div className='freaking'>
                                <div>
                                    <img src={logoFreakingSvg} width="340" />
                                </div>
                                <div className='event-data'>
                                    <h3>
                                        {language === 'ar' ? 'نوفمبر' : 'NOV'}
                                        <br />
                                        3-4
                                    </h3>
                                </div>
                                <div className='event-place'>
                                    <span>
                                        2022
                                        <br />
                                        {language === 'ar' ? "الرياض - المملكة السعودية" : "RIYADH, SAUDI ARABIA"}
                                    </span>
                                </div>

                                <div className='event-btns'>
                                    <Link to="/e3">
                                        <button className='btn btn-outline-light'>
                                            {language === 'ar' ? "المزيد" : "SEE MORE"}
                                        </button>
                                    </Link>
                                    <Link to={"/e3#tickets"}>
                                        <button className='btn btn-light uppercase'>
                                            {language === 'ar' ? "شراء تذاكر" : "Buy Tickets"}
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className='xp'>
                                <div>
                                    <img src={logoXpSvg} width="312" />
                                </div>
                                <div className='event-data'>
                                    <h3>
                                        {language === 'ar' ? 'نوفمبر' : 'NOV'}
                                        <br />
                                        {language === 'ar' ? '28' : '28th'}
                                    </h3>

                                    <div className='event-place'>
                                        <span> 2022 </span>
                                        <br />
                                        <span>  {language === 'ar' ? "الرياض - المملكة السعودية" : "RIYADH, SAUDI ARABIA"} </span>
                                    </div>
                                </div>
                                <button className='btn btn-light uppercase btn-xp'>
                                    {language === 'ar' ? "قريبا" : "Coming Soon"}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col col_three'>
                        <div className='past-title'>
                            <strong> {language === 'ar' ? "فى الماضى" : "Past"} </strong>
                        </div>
                        <div className='event-info' style={{ background: `url(${signerSvg})` }}>
                            <div className='img-info'>
                                <img src={logoEmptSvg} width="193" />
                            </div>
                            <div>
                                <h3>
                                    <strong> {language === 'ar' ? "ديسمبر" : "DEC"} </strong>
                                    <br />
                                    <strong> {language === 'ar' ? "14" : "14th"} </strong>
                                </h3>
                                <div className='sub-text'>
                                    <span> 2021 </span>
                                    <br />
                                    <span> {language === 'ar' ? "الرياض - المملكة السعودية" : "RIYADH, SAUDI ARABIA"} </span>
                                </div>
                                <div>
                                    <Link to={'/e1'}>
                                        <button className='btn btn-light md:'>
                                            {language === 'ar' ? "المزيد" : "SEE MORE"}
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>

                        <div className='event-info' style={{ background: `url(${partySvg})` }}>
                            <div className='img-info'>
                                <img src={logoE2Svg} width="193" />
                            </div>
                            <div>
                                <h3>
                                    <strong> {language === 'ar' ? "مايو" : "MAY"} </strong>
                                    <br />
                                    <strong> 5 - 6 </strong>
                                </h3>
                                <div className='sub-text'>
                                    <span> 2022 </span>
                                    <br />
                                    <span> {language === 'ar' ? "الرياض - المملكة السعودية" : "RIYADH, SAUDI ARABIA"}</span>
                                </div>
                                <div>
                                    <Link to={'/e2'}>
                                        <button className='btn btn-light'>
                                            {language === 'ar' ? "المزيد" : "SEE MORE"}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EventsComponent