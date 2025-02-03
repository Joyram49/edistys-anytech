import Image from "next/image";
import ImplementImageLarge from "./implement-image-large";

function ImplementInfo() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative'>
      <div className='md:space-y-sm space-y-xs'>
        <h6 className='lg:text-head-6 text-res-head-6 uppercase text-text-primaryBlue font-montserrat'>
          seamless execution
        </h6>
        <h2 className=' whitespace-pre-line font-montserrat text-res-head-2 text-text-secondaryBlue lg:text-head-2'>
          Implement
        </h2>
        <div className='!my-[60px] md:hidden block relative h-fit lg:text-clip'>
          <figure
            className='w-[76%] mx-auto'
            style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
          >
            <Image
              src='https://cdn.sanity.io/images/6jywt20u/production/5a83471ce74af85f2e6df7366317403779473423-1002x1023.png?auto=format'
              alt='Implement'
              width={1020}
              height={1097}
              className='object-cover w-full h-full'
              sizes='(min-width: 1024px) 45vw, 95vw'
              loading='lazy'
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
                src='https://cdn.sanity.io/images/6jywt20u/production/00ab5df14d4d1865187a7aed8474a160d0644d22-140x139.svg?w=140&auto=format'
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
                src='https://cdn.sanity.io/images/6jywt20u/production/fcd22256e32d763cd1f314b821158538fdc70e4b-108x109.svg?w=108&auto=format'
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
            <figure className='absolute h-full w-full z-10 -bottom-[100px] md:-bottom-[200px]'>
              <Image
                className='object-cover w-full h-full overflow-visible'
                src='/assets/icons/foreground2.png'
                alt='frame'
                priority
                width={1920}
                height={1080}
              />
            </figure>

            <figure className='absolute h-[160px] w-[160px] md:h-[229px] md:w-[229px] -z-10 -right-3 md:right-0 -bottom-10 md:-bottom-16'>
              <Image
                className='object-cover w-full h-full overflow-visible'
                src='/assets/icons/background2.svg'
                alt='frame'
                priority
                width={229}
                height={229}
              />
            </figure>
          </div>
        </div>
        <div className='lg:pt2'>
          <div className='!text-border-deepBlue'>
            <h5 className=' text-res-head-5 lg:text-head-5 font-montserrat'>
              Ensuring sustainable success stems from the ability to seamlessly
              execute your digital transformation strategies.
            </h5>
            <div className='text-body-1'>
              <p>
                <br />
                Combining deep technological expertise and a proven track
                record, we design and implement custom solutions for financial
                institutions that drive long-term success.
              </p>
              <p>
                <br />
                Partner with AnyTech to bring new capabilities faster to market
                and accelerate revenue generation, increase operational
                efficiency and enhance the overall customer experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ImplementImageLarge />
    </div>
  );
}

export default ImplementInfo;
