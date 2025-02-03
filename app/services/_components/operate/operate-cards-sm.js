"use client";
import HoverCard from "@/app/_components/common/hover-card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
function OperateCardsSm({ operateInfo }) {
  return (
    <div className='md:hidden block mt-md'>
      <div className='relative'>
        <Swiper spaceBetween={30} slidesPerView={1} className='mySwiper'>
          {operateInfo.map((service) => (
            <SwiperSlide key={service.id}>
              <HoverCard data={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default OperateCardsSm;
