import Image from "next/image";

function OperateImageLarge() {
  return (
    <div className='hidden md:block relative h-fit lg:text-clip'>
      <figure
        className='w-[76%] mx-auto'
        style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
      >
        <Image
          src='https://cdn.sanity.io/images/6jywt20u/production/60924eb07b75e8432610c0ba14db5bfa20f8b0c9-1002x1023.png?w=640&auto=format'
          alt='operate'
          width={1020}
          height={1097}
          className='object-cover w-full h-full'
          sizes='(min-width: 1024px) 45vw, 95vw'
          priority={false}
        />
      </figure>
      <div>
        <figure
          className='absolute top-0 right-[3%] translate-x-1/2 w-[min(107px,_23%)] -translate-y-1/2 drop-shadow-2xl'
          style={{
            transform:
              "translateX(var(--motion-translateX)) translateY(var(--motion-translateY))",
            "--motion-translateX": "50%",
          }}
        >
          <Image
            src='https://cdn.sanity.io/images/6jywt20u/production/5e3f324c57e728ee8da64fcbb1fc28cd9ac976b3-100x100.svg?auto=format'
            alt='Icon'
            width={100}
            height={100}
            sizes='107px'
            className='object-contain w-full h-full'
            priority={false}
          />
        </figure>
        <figure
          className='absolute top-[50%] left-[2%] -translate-x-1/2 w-[min(136px,_28%)] drop-shadow-2xl'
          style={{
            transform:
              "translateX(var(--motion-translateX)) translateY(var(--motion-translateY))",
            "--motion-translateX": "-50%",
          }}
        >
          <Image
            src='https://cdn.sanity.io/images/6jywt20u/production/3a008e697fa2af6c25542dd328453dbd0dc97a33-116x115.svg?auto=format'
            alt='Icon'
            width={116}
            height={115}
            sizes='136px'
            className='object-contain w-full h-full'
            priority={false}
          />
        </figure>
      </div>
      <div>
        <figure
          className='absolute h-[130%] md:h-[120%] w-[110%] md:w-[105%] -z-10 inset-0 top-0 md:top-4 -left-5'
          style={{
            transform: "translate3d(0%, -3.59752%, 0px)",
            transition: "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            animationFillMode: "forwards",
          }}
        >
          <Image
            className='object-cover w-full h-full overflow-visible'
            src='/assets/icons/background3.svg'
            alt='frame'
            priority={false}
            fill
          />
        </figure>
        <figure
          className='absolute h-full w-full z-10 -bottom-[120px] md:-bottom-[200px]'
          style={{
            transform: "translate3d(0%, -3.59752%, 0px)",
            transition: "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            animationFillMode: "forwards",
          }}
        >
          <Image
            className='object-cover w-full h-full overflow-visible'
            src='/assets/icons/foreground3.png'
            alt='frame'
            priority={false}
            fill
          />
        </figure>
      </div>
    </div>
  );
}

export default OperateImageLarge;
