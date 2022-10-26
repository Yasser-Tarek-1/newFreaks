import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import aboutUsImg from '../../assets/explore/about-us.jpg';
import partnerImg from '../../assets/explore/partner.jpg';
import blogImg from '../../assets/explore/blog.jpg';

import './explore-more.css';


const ExploreMoreComponent = () => {
  const language = useSelector((state) => {
    return state.language.language;
  });
  return (
    <div className='explore-more-component'>
      <div className='heading'>
        <div className='title'>
          <h3> {language === 'ar' ? 'إستكشاف المزيد' : 'Explore More'} </h3>
        </div>
      </div>
      <div className='content_row'>
        <div className='row'>
          <div className='col'
            style={{ background: `url(${aboutUsImg})` }}>
            <div className='info'>
              <h3> {language === 'ar' ? 'من نحن' : 'About us'} </h3>
              <p>
                Freaks of Nature is a boutique electronic music and art festivals combining dance, special effects, stunning colourful visuals and costumes that transcends music and provides a unique platform for emerging artists, international headliners and local talent.
              </p>
              <Link to="/about">
                <button className='btn btn-outline-light'>
                  {language === 'ar' ? 'تعلم المزيد' : 'learn More'}
                </button>
              </Link>
            </div>
          </div>
          <div className='col'
            style={{ background: `url(${partnerImg})` }}>
            <div className='info'>
              <h3>
                {language === 'ar' ? 'شريك معنا' : 'Partner With us'}
              </h3>
              <p>
                Be part of Saudi Arabia’s fastest-growing festival movement and explore the opportunities on offer to support art, entertainment, music and creativity at Freaks of Nature.
              </p>
              <Link to="/partner">
                <button className='btn btn-outline-light'>
                  {language === 'ar' ? 'تعلم المزيد' : 'learn More'}
                </button></Link>
            </div>
          </div>
          <div className='col'
            style={{ background: `url(${blogImg})` }}>
            <div className='info'>
              <h3> {language === 'ar' ? 'المدونة' : 'Blog'} </h3>
              <p>
                Find out the latest goings on from Freaks of Nature and across the Saudi music scene with insights from our creative team and local artists.
              </p>
              <Link to="/blog">
              <button className='btn btn-outline-light'>
                {language === 'ar' ? 'تعلم المزيد' : 'learn More'}
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreMoreComponent