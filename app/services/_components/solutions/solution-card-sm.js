"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
function SolutionCardSm({ cardData }) {
  // State to track the active card
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle mouse enter
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };
  return (
    <div className='md:hidden block mt-md'>
      <div className='relative'>
        <Swiper spaceBetween={30} slidesPerView={1} className='mySwiper'>
          {cardData.map((card, index) => {
            let gradientStyle;
            let borderStyle = "";

            // Define gradient and border styles based on index
            if (index === 0) {
              gradientStyle = "linear-gradient(45deg, #1CC800 3%, #014AB8 30%)";
              borderStyle = {
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(to right, #1CC800,#014AB8)",
                boxSizing: "border-box",
              };
            } else if (index === 1) {
              gradientStyle = "linear-gradient(45deg, #9747FF 3%, #014AB8 30%)";
              borderStyle = {
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(to right, #9747FF,#014AB8)",
                boxSizing: "border-box",
              };
            } else if (index === 2) {
              gradientStyle = "linear-gradient(45deg, #40FEFF 3%, #014AB8 30%)";
              borderStyle = {
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(to right, #40FEFF, #014AB8)",
                boxSizing: "border-box",
              };
            }

            return (
              <SwiperSlide key={index}>
                <Link href={card.link}>
                  <article
                    className={`relative group rounded-[20px] min-h-full p-px transition-all duration-300 border border-transparent hover:border-solid shadow-[0px_16px_21px_0px_rgba(207,233,246,0.47)]`}
                    style={
                      activeIndex === index
                        ? borderStyle
                        : { background: "transparent" }
                    }
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Inner White Container */}
                    <div className='relative z-10 h-full w-full rounded-[20px] bg-white p-[32px]'>
                      <h3
                        style={{
                          backgroundColor: "#9747FF",
                          background: gradientStyle,
                        }}
                        className='text-res-head-3 lg:text-head-3 font-montserrat !bg-clip-text text-transparent'
                      >
                        {card.name}
                      </h3>
                      <div className='mb-[24px] mt-2.5 flex items-center gap-[5px] font-montserrat text-[6.847px] font-bold uppercase leading-[1.1] text-[#014AB8]'>
                        By{" "}
                        <Image
                          src={card.by.asset.url}
                          alt={card.by.alt}
                          width={74}
                          height={12}
                          className='w-[74px] h-[12px]'
                        />
                      </div>
                      <div className='text-body-p1 text-border-deepBlue'>
                        {card.details.map((text, index) => (
                          <div key={index}>
                            <div className='text-body-1'>
                              <p>
                                {index === 1 ? <strong>{text}</strong> : text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default SolutionCardSm;
