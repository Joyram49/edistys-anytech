import { motion } from "framer-motion";
import Image from "next/image";

function FinanceImage() {
  return (
    <div className='!my-[60px] md:hidden block relative h-fit lg:text-clip'>
      <figure className='w-[76%] mx-auto shadow-[0px_23px_30px_0px_#16437763]'>
        <Image
          src='https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png'
          alt='POWERING THE FUTURE OF FINANCE'
          width={1124}
          height={1364}
          sizes='(min-width: 1024px) 45vw, 95vw'
          className='object-cover w-full h-full'
          priority={false}
        />
      </figure>
      <div>
        {/* This is the animated motion figure */}
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
            src='https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?auto=format'
            width={116}
            height={115}
            alt='anybass'
            sizes='115px'
            className='object-contain w-full h-full'
            priority={false}
          />
        </motion.figure>

        {/* Other figures */}
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
            src='https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?auto=format'
            width={89}
            height={88}
            alt='anypass'
            sizes='87px'
            className='object-contain w-full h-full'
            priority={false}
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
            src='https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?auto=format'
            width={74}
            height={75}
            alt='anycaas'
            sizes='73px'
            className='object-contain w-full h-full'
            priority={false}
          />
        </motion.figure>
      </div>
      <figure
        className='absolute inset-0 w-full h-full -z-10'
        style={{
          transform: "translate3d(0%, -4.43907%, 0px)",
          transition: "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          animationFillMode: "forwards",
        }}
      >
        <Image
          src='/assets/icons/background.svg'
          alt='background frame'
          fill
          className='object-cover w-full h-full overflow-visible'
          priority={false}
        />
      </figure>
      <figure
        className='absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]'
        style={{
          transform: "translate3d(0%, 1.77563%, 0px)",
          transition: "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          animationFillMode: "forwards",
        }}
      >
        <Image
          src='/assets/icons/foreground.png'
          alt='foreground frame'
          fill
          className='object-cover w-full h-full overflow-visible'
          priority={false}
        />
      </figure>
    </div>
  );
}

export default FinanceImage;
