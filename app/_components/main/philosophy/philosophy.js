import Image from "next/image";
import PhilosophyCards from "./philosophy-cards";

function Philosophy() {
  return (
    <section className='container md:mb-[128px] mx-auto px-6 md:px-0'>
      <div className=' md:space-y-sm space-y-xs text-center'>
        <h6 className=' lg:text-head-6 text-res-head-6 uppercase text-text-primaryBlue font-montserrat'>
          OUR PHILOSOPHY
        </h6>
        <h2 className=' whitespace-pre-line font-montserrat text-res-head-2 text-text-secondaryBlue lg:text-head-2'>
          Human-centred innovation
        </h2>
      </div>
      <figure className='py-[32px]'>
        {/* Image for screens smaller than md (768px) */}
        <Image
          src='https://cdn.sanity.io/images/6jywt20u/production/50bc481601f8adb912da12788f7d0143eb5b5eb3-1710x1965.png?auto=format'
          alt='Image'
          width={1710}
          height={1965}
          sizes='95vw'
          className='h-full w-full md:hidden'
          loading='lazy'
        />
        {/* Image for screens larger than or equal to md (768px) */}
        <Image
          src='https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?auto=format'
          alt='Image'
          width={2206}
          height={727}
          sizes='95vw'
          className='h-full w-full hidden md:block'
          loading='lazy'
        />
      </figure>
      <PhilosophyCards />
    </section>
  );
}

export default Philosophy;
