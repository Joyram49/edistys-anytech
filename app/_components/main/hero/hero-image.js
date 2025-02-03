"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroImage = () => {
  const [translateX, setTranslateX] = useState("-12%");

  useEffect(() => {
    const handleScroll = () => {
      setTranslateX("-12%");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none svelte-1lc7tvy '>
      <motion.figure
        className='relative h-[115%] w-[115%] overflow-hidden '
        initial={{ x: "-12%" }}
        animate={{ x: "-12%" }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image
          src='https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg'
          alt='background image'
          width={7952}
          height={5304}
          sizes='55vw'
          className='h-full w-full object-cover'
          priority
        />
      </motion.figure>
      <div className='gradient-overlay svelte-1lc7tvy'></div>
    </div>
  );
};

export default HeroImage;
