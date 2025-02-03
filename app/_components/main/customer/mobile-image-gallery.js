"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function MobileImageGallery({ images }) {
  return (
    <div className='mt-lg overflow-x-hidden md:hidden'>
      <Swiper
        modules={[FreeMode, Autoplay]}
        freeMode={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        slidesPerView='auto'
        spaceBetween={32}
        className='flex items-center'
      >
        {images.map((logo, index) => (
          <SwiperSlide
            key={index}
            className='!w-[170px] flex items-center my-auto'
          >
            <picture className='relative flex items-stretch bg-cover'>
              <Image
                src={logo}
                alt={`Gallery Image ${index + 1}`}
                width={720}
                height={560}
                className='w-full h-36 object-contain cursor-pointer'
                priority
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MobileImageGallery;
