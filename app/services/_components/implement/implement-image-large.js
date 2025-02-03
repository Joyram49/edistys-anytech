import Image from "next/image";

function ImplementImageLarge() {
  return (
    <div className='hidden md:block relative h-fit lg:text-clip'>
      <figure
        className='w-[76%] mx-auto'
        style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
      >
        <Image
          src='https://cdn.sanity.io/images/6jywt20u/production/df3fa35d203ad1fc9b3515af8205cabd45cd20e5-1020x1097.png'
          alt='The Power of Data'
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
            src='https://cdn.sanity.io/images/6jywt20u/production/4368d7fe778fad3d310b1920d3c536c4917a2805-148x147.svg?auto=format'
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
            src='https://cdn.sanity.io/images/6jywt20u/production/f4506bfe8d178b53a3bef641857b806c86313b61-108x109.svg?auto=format'
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
        <figure
          className='absolute h-full w-[40%] -top-24 -z-10 md:-top-32 xl:-top-40 -left-0 md:left-4'
          style={{
            transform: "translate3d(0%, -3.26723%, 0px)",
            transition: "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
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
            transform: "translate3d(0%, -3.26723%, 0px) rotateX(30deg)",
            transition: "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
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
  );
}

export default ImplementImageLarge;
