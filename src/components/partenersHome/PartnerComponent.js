import React from 'react'
import { useTranslation } from 'react-i18next'

import hotelPartner from "../../assets/partners/hotelPartner.svg"
import avPartner from "../../assets/partners/avPartner.svg"
import mediaPartner from "../../assets/partners/mediaPartner.svg"
import mediaPartner2 from "../../assets/partners/mediaPartner2.svg"


const PartnerComponent = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='w-full py-[50px]'>
      <h3 className='px-[30px] text-white text-[30px]  sm:text-[40px] uppercase font-bold'>
        {i18n.language == "en" ? "Partners" : "شركائنا"
        }
      </h3>
      <div className='bg-[#fb560740] mt-[20px] relative'>
        <div className='px-2 sm:px-[50px] md:px-[60px] pt-[10px] pb-[40px] grid grid-cols-4 items-center gap-6'>
          <div className='flex flex-col items-center'>
            <img src={hotelPartner} alt="hotelPartner" className='w-full max-w-[250px]' />
            <p className='text-white mt-4 text-[10px] md:text-base absolute bottom-[20px] font-[stolzi-light] sm:font-[stolzi]'>
              {i18n.language == "en" ? "Hotel Partner" : "الشريك الفندقي"
              }
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={avPartner} alt="avPartner" className='w-full max-w-[250px]' />
            <p className='text-white mt-4 text-[10px] md:text-base absolute bottom-[20px] font-[stolzi-light] sm:font-[stolzi]'>
              {i18n.language == "en" ? "AV Partner" : "الشريك المنظم"
              }
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={mediaPartner} alt="mediaPartner" className='w-full max-w-[250px]' />
            <p className='text-white mt-4 text-[10px] md:text-base absolute bottom-[20px] font-[stolzi-light] sm:font-[stolzi]'>
              {i18n.language == "en" ? "Media Partner" : "الشريك الاعلامي"
              }
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={mediaPartner2} alt="mediaPartner2" className='w-full max-w-[250px]' />
            <p className='text-white mt-4 text-[10px] md:text-base absolute bottom-[20px] font-[stolzi-light] sm:font-[stolzi]'>
              {i18n.language == "en" ? "Media Partner" : "الشريك الاعلامي"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnerComponent