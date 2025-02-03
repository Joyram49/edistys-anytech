"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function FinanceImageSm() {
  return (
    <div className='hidden md:block relative h-fit lg:text-clip'>
      <figure className='w-[76%] mx-auto shadow-[0px_23px_30px_0px_#16437763]'>
        <Image
          src='https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png'
          alt='POWERING THE FUTURE OF FINANCE'
          width={1124}
          height={1364}
          className='object-cover w-full h-full'
          priority={false}
        />
      </figure>
      <div>
        <motion.figure
          className='absolute top-[10%] right-[3%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl'
          animate={{
            y: ["0%", "20%", "0%"],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Image
            src='https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg'
            alt='anybass'
            width={116}
            height={115}
            className='object-contain w-full h-full'
          />
        </motion.figure>
        <motion.figure
          className='absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl'
          animate={{
            y: ["0%", "20%", "0%"],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Image
            src='https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg'
            alt='anypass'
            width={89}
            height={88}
            className='object-contain w-full h-full'
          />
        </motion.figure>
        <motion.figure
          className='absolute top-[20%] left-[6%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl'
          animate={{
            y: ["0%", "20%", "0%"],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Image
            src='https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg'
            alt='anycaas'
            width={74}
            height={75}
            className='object-contain w-full h-full'
          />
        </motion.figure>
      </div>
      <figure
        className='absolute inset-0 w-full h-full -z-10'
        style={{
          transform: "translate3d(0%, -0.0207346%, 0px)",
          transition: "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          animationFillMode: "forwards",
        }}
      >
        <Image
          src='/assets/icons/background.svg'
          alt='background frame'
          layout='fill'
          className='object-cover w-full h-full overflow-visible'
          priority
        />
      </figure>
      <figure
        className='absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]'
        style={{
          transform: "translate3d(0%, 0.00829384%, 0px)",
          transition: "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          animationFillMode: "forwards",
        }}
      >
        <Image
          src='/assets/icons/foreground.png'
          alt='foreground frame'
          layout='fill'
          className='object-cover w-full h-full overflow-visible'
          priority
        />
      </figure>
    </div>
  );
}

export default FinanceImageSm;
