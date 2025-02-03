import Image from "next/image";

function PowerImageLarge() {
  return (
    <div className='hidden md:block relative h-fit lg:text-clip'>
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
          priority={false}
        />
      </figure>
      <div>
        <figure
          className='absolute top-[25%] right-0 translate-x-1/2 w-[min(146px,_30%)] -translate-y-1/2 drop-shadow-2xl'
          style={{
            transform:
              "translateX(var(--motion-translateX)) translateY(var(--motion-translateY))",
            "--motion-translateX": "50%",
          }}
        >
          <Image
            src='https://cdn.sanity.io/images/6jywt20u/production/00ab5df14d4d1865187a7aed8474a160d0644d22-140x139.svg?w=140&auto=format'
            alt='Icon'
            width={148}
            height={147}
            className='object-contain w-full h-full'
            sizes='146px'
            priority={false}
          />
        </figure>
        <figure
          className='absolute top-[60%] left-[4%] -translate-x-1/2 w-[min(100px,_20%)] drop-shadow-2xl'
          style={{
            transform:
              "translateX(var(--motion-translateX)) translateY(var(--motion-translateY))",
            "--motion-translateX": "-50%",
          }}
        >
          <Image
            src='https://cdn.sanity.io/images/6jywt20u/production/fcd22256e32d763cd1f314b821158538fdc70e4b-108x109.svg?w=108&auto=format'
            alt='Icon'
            width={108}
            height={109}
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
  );
}

export default PowerImageLarge;
