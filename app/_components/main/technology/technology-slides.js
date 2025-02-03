"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const swiperData = [
  {
    id: 1,
    category: "Customer focused",
    title: "Purpose-built financial services",
    description: [
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    ],
    image: {
      src: "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg",
      alt: "Customer Focused",
      width: 3672,
      height: 2712,
    },
  },
  {
    id: 2,
    category: "Agile and adaptable",
    title: "Agile and adaptable for growth",
    description: [
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    ],
    image: {
      src: "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg",
      alt: "Agile and Adaptable",
      width: 6400,
      height: 4800,
    },
  },
  {
    id: 3,
    category: "Compliance ready",
    title: "Manage compliance with ease",
    description: [
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    ],
    image: {
      src: "https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png",
      alt: "Compliance Ready",
      width: 1509,
      height: 1284,
    },
  },
  {
    id: 4,
    category: "Secure and safe",
    title: "Highly secure and safe",
    description: [
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
      "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    ],
    image: {
      src: "https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg",
      alt: "Secure and Safe",
      width: 10000,
      height: 5000,
    },
  },
];

const customStyles = `
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #D1D5DB;
    opacity: 1;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    width: 40px; 
    border-radius: 6px; 
    background: #1f80f0;
  }

  /* Custom container for pagination bullets */
  .swiper-pagination {
    position: relative;
    bottom: 0 !important;
    margin-top: 2rem;
  }

  .swiper-pagination-bullet:hover {
    background: #9CA3AF;
  }
`;
function TechnologySlides() {
  return (
    <>
      <style>{customStyles}</style>
      <div className='relative pb-12'>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            },
          }}
          className='w-full'
        >
          {swiperData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <article
                className='grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white'
                style={{
                  filter:
                    "drop-shadow(rgba(207, 233, 247, 0.47) 0px 16px 21px)",
                }}
              >
                <section className='lg:space-y-md space-y-sm'>
                  <header className='lg:space-y-md space-y-xs'>
                    <h6 className='lg:text-head-6 text-res-head-6 uppercase text-text-primaryBlue font-montserrat'>
                      {slide.category}
                    </h6>
                    <h3 className='text-text-secondaryBlue text-res-head-2 lg:text-head-2 font-montserrat'>
                      {slide.title}
                    </h3>
                  </header>

                  {/* Mobile image */}
                  <figure className='md:hidden h-[150px]'>
                    <Image
                      src={slide.image.src}
                      alt={slide.image.alt}
                      className='h-full w-full object-cover rounded-[8px]'
                      width={slide.image.width}
                      height={slide.image.height}
                    />
                  </figure>

                  <div className='text-border-deepBlue'>
                    {slide.description.map((paragraph, idx) => (
                      <div key={idx} className='text-body-1'>
                        <p>{paragraph}</p>
                        {idx < slide.description.length - 1 && <br />}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Desktop image */}
                <figure className='hidden md:block h-[425px]'>
                  <Image
                    src={slide.image.src}
                    alt={slide.image.alt}
                    className='h-full w-full object-cover rounded-[16px]'
                    width={slide.image.width}
                    height={slide.image.height}
                  />
                </figure>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default TechnologySlides;
