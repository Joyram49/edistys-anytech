"use client";
import { useState } from "react";
import TechnologySlides from "./technology-slides";
import TechnologyTab from "./technology-tab";

function Technology() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <section className='container mx-auto px-6 md:px-0'>
        <div className=' md:space-y-sm space-y-xs text-center'>
          <h1 className='text-res-head-6 lg:text-head-6 uppercase text-text-primaryBlue font-montserrat'>
            TECHNOLOGY BUILT FOR YOU
          </h1>
          <h2 className='whitespace-pre-line font-montserrat text-res-head-2 text-text-secondaryBlue lg:text-head-2'>
            The future of finance
          </h2>
        </div>
        <TechnologyTab activeIndex={activeIndex} />
        <TechnologySlides setActiveIndex={setActiveIndex} />
      </section>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        className='undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]'
        preserveAspectRatio='xMidYMid slice'
        viewBox='0 0 1920 280'
      >
        <path
          fill='url(#paint0_linear_6055_471)'
          d='M-240 0h1920L-240 280z'
          opacity='0.7'
        ></path>
        <defs>
          <linearGradient
            id='paint0_linear_6055_471'
            x1='458.5'
            x2='392.705'
            y1='1561.14'
            y2='52.188'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#1F80F0'></stop>
            <stop offset='1' stopColor='#1F80F0' stopOpacity='0'></stop>
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}

export default Technology;
