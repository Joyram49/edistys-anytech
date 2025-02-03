import HeroServiceSVGOne from "./hero-svg-one";
import HeroServiceSVGTwo from "./hero-svg-two";

function ServiceHeroSection() {
  return (
    <section className='lg:h-[max(640px,_calc(80vh-139px))] md:h-[max(600px,_calc(70vh-139px))] h-[max(490px,50vh)] relative w-full text-white overflow-hidden bg-clip-hero svelte-n9olsd px-6 md:px-0'>
      <div className='h-full w-full relative z-20'>
        <div className='container relative z-10 w-full h-full flex md:items-center mx-auto'>
          <div className='md:mt-0 mt-[77px]'>
            <h6 className='!text-teal-400 mb-[24px] text-[12px] leading-[15px] lg:text-head-6 text-res-head-6 uppercase text-text-primaryBlue font-montserrat'>
              OUR SERVICES
            </h6>{" "}
            <h1 className='md:whitespace-pre-wrap mb-[24px] !text-transparent bg-clip-text bg-gradient-to-r !from-[#c5d8ee] !via-white !to-white md:!text-[80px] !text-[50px] lg:text-head-1 font-montserrat text-res-head-1 text-white'>
              Reimagining banking solutions
            </h1>{" "}
            <h5 className='!text-white lg:whitespace-pre-wrap text-res-head-5 text-text-primaryBlue lg:text-head-5 font-montserrat'>
              Enabling financial institutions to create unparalleled customer
              experiences
            </h5>
          </div>
        </div>
      </div>
      <HeroServiceSVGOne />
      <HeroServiceSVGTwo />
    </section>
  );
}

export default ServiceHeroSection;
