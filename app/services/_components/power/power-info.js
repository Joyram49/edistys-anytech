import Image from "next/image";
import PowerImageLarge from "./power-image-lg";

function PowerInfo() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative'>
      <div className='md:space-y-sm space-y-xs'>
        <h6 className='lg:text-head-6 text-res-head-6 uppercase text-text-primaryBlue font-montserrat'>
          What We Do
        </h6>
        <h2 className=' whitespace-pre-line font-montserrat text-res-head-2 text-text-secondaryBlue lg:text-head-2'>
          The power of data
        </h2>
        <div className='!my-[60px] md:hidden block relative h-fit lg:text-clip'>
          <figure
            className='w-[76%] mx-auto'
            style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
          >
            <Image
              src='https://cdn.sanity.io/images/6jywt20u/production/df3fa35d203ad1fc9b3515af8205cabd45cd20e5-1020x1097.png?auto=format'
              alt='The Power of Data'
              width={1020}
              height={1097}
              className='object-cover w-full h-full'
              sizes='(min-width: 1024px) 45vw, 95vw'
              loading='lazy'
              srcSet='
          https://cdn.sanity.io/images/6jywt20u/production/df3fa35d203ad1fc9b3515af8205cabd45cd20e5-1020x1097.png?w=320&auto=format 320w,
          https://cdn.sanity.io/images/6jywt20u/production/df3fa35d203ad1fc9b3515af8205cabd45cd20e5-1020x1097.png?w=640&auto=format 640w,
          https://cdn.sanity.io/images/6jywt20u/production/df3fa35d203ad1fc9b3515af8205cabd45cd20e5-1020x1097.png?w=960&auto=format 960w,
          https://cdn.sanity.io/images/6jywt20u/production/df3fa35d203ad1fc9b3515af8205cabd45cd20e5-1020x1097.png?w=1020&auto=format 1020w
        '
            />
          </figure>
          <div>
            <figure
              className='absolute top-[25%] right-[1%] translate-x-1/2 w-[min(146px,_30%)] -translate-y-1/2 drop-shadow-2xl'
              style={{
                transform:
                  "translateX(var(--motion-translateX)) translateY(var(--motion-translateY))",
                "--motion-translateX": "50%",
              }}
            >
              <Image
                src='https://cdn.sanity.io/images/6jywt20u/production/4368d7fe778fad3d310b1920d3c536c4917a2805-148x147.svg?auto=format'
                width={148}
                height={147}
                alt='Icon'
                className='object-contain w-full h-full'
                sizes='146px'
                priority={false}
              />
            </figure>
            <figure
              className='absolute top-[60%] left-[3%] -translate-x-1/2 w-[min(100px,_20%)] drop-shadow-2xl'
              style={{
                transform:
                  "translateX(var(--motion-translateX)) translateY(var(--motion-translateY))",
                "--motion-translateX": "-50%",
              }}
            >
              <Image
                src='https://cdn.sanity.io/images/6jywt20u/production/f4506bfe8d178b53a3bef641857b806c86313b61-108x109.svg?auto=format'
                width={108}
                height={109}
                alt='Icon'
                className='object-contain w-full h-full'
                sizes='100px'
                priority={false}
              />
            </figure>
          </div>
          <div>
            <figure
              className='absolute h-full w-[40%] -z-10 md:-top-32 xl:-top-40 -top-24 -left-0 md:left-4'
              style={{
                transform: "translate3d(0%, 0%, 0px)",
                transition:
                  "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                animationFillMode: "forwards",
                opacity: 1,
              }}
            >
              <Image
                src='/assets/frames/services/frame2.svg'
                alt='frame'
                layout='fill'
                objectFit='contain'
                className='overflow-visible'
                priority={false}
              />
            </figure>
            <figure
              className='absolute h-full w-[40%] -z-10 md:-bottom-32 xl:-bottom-40 -bottom-24 right-0 md:right-4'
              style={{
                transform: "translate3d(0%, 0%, 0px)",
                transition:
                  "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                animationFillMode: "forwards",
              }}
            >
              <Image
                src='/assets/frames/services/frame1.svg'
                alt='frame'
                layout='fill'
                objectFit='contain'
                className='overflow-visible'
                priority={false}
              />
            </figure>
          </div>
        </div>
        <div className='lg:pt2'>
          <div className='!text-border-deepBlue'>
            <h5 className=' text-res-head-5 lg:text-head-5 font-montserrat'>
              In today&apos;s rapidly evolving financial landscape, banks and
              financial institutions face unprecedented challenges. At AnyTech,
              we understand the critical need for continuous innovation and
              strategic decision-making in order to thrive.
            </h5>
            <div className='text-body-1'>
              <p>
                <br />
                With our global perspective and cutting-edge solutions, we are
                here to help you create unparalleled customer experiences that
                will set you apart from the competition. Embark on a journey of
                transformation with AnyTech—one that will redefine what’s
                possible for your institution.
              </p>
            </div>
          </div>
        </div>
      </div>
      <PowerImageLarge />
    </div>
  );
}

export default PowerInfo;
