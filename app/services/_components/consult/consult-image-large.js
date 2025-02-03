import Image from "next/image";

function ConsultImageLarge() {
  return (
    <div className='hidden md:block relative h-fit lg:text-clip'>
      <figure
        className='w-[76%] mx-auto'
        style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
      >
        <Image
          src='https://cdn.sanity.io/images/6jywt20u/production/75de4e417de603ce210bea0f109e45a9e37d9a23-1206x816.png?auto=format'
          alt='Taking the First Step'
          className='object-cover w-full h-full'
          loading='lazy'
          sizes='(min-width: 1024px) 45vw, 95vw'
          width={1206}
          height={816}
        />
      </figure>
      <div>
        <figure
          className='absolute -top-[20px] lg:-top-[20px] w-[min(150px,_30%)] md:right-0 -right-[10%] drop-shadow-2xl'
          style={{
            transform:
              "translateX(var(--motion-translateX)) translateY(var(--motion-translateY))",
            "--motion-translateX": "50%",
          }}
        >
          <Image
            src='https://cdn.sanity.io/images/6jywt20u/production/bc217eefe37b614acbffcb924052e0a35c55b4eb-162x182.svg?auto=format'
            alt='Icon'
            width={162}
            height={182}
            sizes='150px'
            className='object-contain w-full h-full'
            loading='lazy'
          />
        </figure>
        <figure
          className='absolute -top-[25px] lg:-top-[20px] left-0 lg:left-[14px] w-[min(320px,_35%)] drop-shadow-2xl'
          style={{
            transform:
              "translateX(var(--motion-translateX)) translateY(var(--motion-translateY))",
            "--motion-translateX": "-50%",
          }}
        >
          <Image
            srcSet='https://cdn.sanity.io/images/6jywt20u/production/3fb880ac9df2bd6b2d7697f850118b858d842476-356x368.png?w=320&auto=format 320w, https://cdn.sanity.io/images/6jywt20u/production/3fb880ac9df2bd6b2d7697f850118b858d842476-356x368.png?w=356&auto=format 356w'
            src='https://cdn.sanity.io/images/6jywt20u/production/3fb880ac9df2bd6b2d7697f850118b858d842476-356x368.png?auto=format'
            width={356}
            height={368}
            alt='Vector'
            sizes='320px'
            className='object-contain w-full h-full'
            loading='lazy'
          />
        </figure>
      </div>
      <div>
        <figure
          className='absolute h-[80%] w-[80%] -z-10 -right-[60px] -bottom-[30px] lg:-bottom-[85px] lg:-right-[100px]'
          style={{
            transform: "translate3d(0%, -2.8006%, 0px)",
            transition: "transform 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            animationFillMode: "forwards",
          }}
        >
          <Image
            src='/assets/frames/services/frame3.svg'
            alt='frame'
            className='object-contain w-full h-full'
            loading='lazy'
            width={1206}
            height={816}
          />
        </figure>
      </div>
    </div>
  );
}

export default ConsultImageLarge;
