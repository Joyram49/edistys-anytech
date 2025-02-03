import Image from "next/image";

function ConsultInfo() {
  return (
    <div className='md:space-y-sm space-y-xs'>
      <h6 className='lg:text-head-6 text-res-head-6 uppercase text-text-primaryBlue font-montserrat'>
        Taking the first step
      </h6>
      <h2 className=' whitespace-pre-line font-montserrat text-res-head-2 text-text-secondaryBlue lg:text-head-2'>
        Consult
      </h2>
      <div className='!my-[60px] md:hidden block relative h-fit lg:text-clip'>
        <figure
          className='w-[76%] mx-auto'
          style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
        >
          <Image
            src='https://cdn.sanity.io/images/6jywt20u/production/75de4e417de603ce210bea0f109e45a9e37d9a23-1206x816.png?auto=format'
            srcSet='
          https://cdn.sanity.io/images/6jywt20u/production/75de4e417de603ce210bea0f109e45a9e37d9a23-1206x816.png?w=320&auto=format 320w,
          https://cdn.sanity.io/images/6jywt20u/production/75de4e417de603ce210bea0f109e45a9e37d9a23-1206x816.png?w=640&auto=format 640w,
          https://cdn.sanity.io/images/6jywt20u/production/75de4e417de603ce210bea0f109e45a9e37d9a23-1206x816.png?w=960&auto=format 960w,
          https://cdn.sanity.io/images/6jywt20u/production/75de4e417de603ce210bea0f109e45a9e37d9a23-1206x816.png?w=1206&auto=format 1206w
        '
            alt='Taking the First Step'
            width={1206}
            height={816}
            className='object-cover w-full h-full'
            sizes='(min-width: 1024px) 45vw, 95vw'
            loading='lazy'
          />
        </figure>
        <div>
          <figure
            className='absolute -top-[20px] lg:-top-[20px] w-[min(150px,_30%)] md:right-16 right-0 drop-shadow-2xl'
            style={{
              transform:
                "translateX(var(--motion-translateX)) translateY(var(--motion-translateY))",
              "--motion-translateX": "50%",
            }}
          >
            <Image
              src='https://cdn.sanity.io/images/6jywt20u/production/bc217eefe37b614acbffcb924052e0a35c55b4eb-162x182.svg?auto=format'
              srcSet='https://cdn.sanity.io/images/6jywt20u/production/bc217eefe37b614acbffcb924052e0a35c55b4eb-162x182.svg?w=162&auto=format 162w'
              alt='Icon'
              width={162}
              height={182}
              className='object-contain w-full h-full'
              sizes='150px'
            />
          </figure>
          <figure
            className='absolute -top-[25px] lg:-top-[20px] left-10 lg:left-[98px] w-[min(320px,_35%)] drop-shadow-2xl'
            style={{
              transform:
                "translateX(var(--motion-translateX)) translateY(var(--motion-translateY))",
              "--motion-translateX": "-50%",
            }}
          >
            <Image
              src='https://cdn.sanity.io/images/6jywt20u/production/3fb880ac9df2bd6b2d7697f850118b858d842476-356x368.png?auto=format'
              srcSet='
          https://cdn.sanity.io/images/6jywt20u/production/3fb880ac9df2bd6b2d7697f850118b858d842476-356x368.png?w=320&auto=format 320w,
          https://cdn.sanity.io/images/6jywt20u/production/3fb880ac9df2bd6b2d7697f850118b858d842476-356x368.png?w=356&auto=format 356w
        '
              alt='Vector'
              width={356}
              height={368}
              className='object-contain w-full h-full'
              sizes='320px'
              loading='lazy'
            />
          </figure>
        </div>
        <div>
          <figure className='absolute h-[80%] w-[80%] -z-10 -right-[120px] -bottom-[50px] '>
            <Image
              src='/assets/frames/services/frame3.svg'
              alt='frame'
              className='object-contain w-full h-full'
              loading='lazy'
              width={1000}
              height={1000}
            />
          </figure>
        </div>
      </div>
      <div className='lg:pt2'>
        <div className='!text-border-deepBlue'>
          <h5 className=' text-res-head-5 lg:text-head-5 font-montserrat'>
            Taking the leap towards digital transformation with the ambition of
            delivering augmented value in financial services can be daunting
          </h5>
          <div className='text-body-1'>
            <p>
              <br />
              Tap on the vast experience and deep knowledge of our experts. Our
              breadth of consulting expertise spans from applying the latest
              financial technological innovations to implementing risk-control
              strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultInfo;
