function TechnologyTab() {
  return (
    <div className='flex-wrap space-x-4 justify-center items-center lg:flex hidden py-[32px]'>
      <button className='lg:text-body-p0 text-res-body-p0 !font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px]  xl:py-[8px] rounded-[200px] transition-colors duration-300 text-text-primaryBlue  hover:bg-[#F5FAFF] '>
        Customer focused{" "}
      </button>
      <button className='lg:text-body-p0 text-res-body-p0 !font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px]  xl:py-[8px] rounded-[200px] transition-colors duration-300 text-text-primaryBlue  hover:bg-[#F5FAFF] '>
        Agile and adaptable{" "}
      </button>
      <button
        className='lg:text-body-p0 text-res-body-p0 !font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px]  xl:py-[8px] rounded-[200px] transition-colors duration-300 text-text-primaryBlue  bg-text-footerHover
       '
      >
        Compliance ready{" "}
      </button>
      <button className='lg:text-body-p0 text-res-body-p0 !font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px]  xl:py-[8px] rounded-[200px] transition-colors duration-300 text-text-primaryBlue  hover:bg-[#F5FAFF]'>
        Secure and safe{" "}
      </button>
    </div>
  );
}

export default TechnologyTab;
