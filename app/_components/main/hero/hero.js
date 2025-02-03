"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CTAHero from "../../common/cta";
import SVGBackgroundOne from "../../common/svg-background-one";
import SVGBackgroundTwo from "../../common/svg-background-two";
import HeroImage from "./hero-image";

function HeroSection() {
  return (
    <>
      <section className=' h-auto relative w-full text-white lg:h-[max(620px,_calc(92vh-49px))] lg:bg-clip-hero-container overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 pb-[15%] svelte-n9olsd px-6 md:px-0'>
        <div className='container relative z-10 w-full h-full md:flex md:items-center md:justify-center mx-auto '>
          <div className='h-fit lg:flex-[65] xl:flex-[75]'>
            <div className='max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]'>
              <h1 className='lg:max-w-max lg:whitespace-pre-line lg:text-head-1 font-montserrat text-res-head-1 text-white '>
                Embrace the future of finance
              </h1>{" "}
              <h5 className='!text-white max-w-[37rem] lg:mr-5 text-res-head-5 text-text-primaryBlue lg:text-head-5 font-montserrat'>
                Reimagine financial services with AnyTech’s open platform,
                distributed banking solution that powers transformation
              </h5>
              <div className='flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full lg:mb-0 mb-[32px] max-w-xl'>
                <CTAHero text='Reach Out to Us' />
              </div>
            </div>
          </div>
          <div className='lg:flex-[35] xl:flex-[25] lg:block hidden'></div>
        </div>
        <motion.div
          className='absolute inset-0 flex items-center justify-center'
          initial={{ x: "10%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <HeroImage />
        </motion.div>

        <SVGBackgroundOne />
        <SVGBackgroundTwo />
      </section>
      <div className='block lg:hidden translate-y-[-20%] -mb-[10%]'>
        <figure
          className='object-cover overflow-hidden'
          style={{
            clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)",
          }}
        >
          <Image
            src='https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg'
            alt='background image'
            width={7952}
            height={5304}
            sizes='100vw'
            className='h-full w-full object-cover scale-150'
            priority
          />
        </figure>
        <div className='gradient-overlay'></div>
      </div>
    </>
  );
}

export default HeroSection;
