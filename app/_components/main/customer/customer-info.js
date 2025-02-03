function CustomerInfo() {
  return (
    <div className='items-center justify-between space-y-6 lg:space-y-0 lg:flex xl:mx-28'>
      <div className='flex items-center border-dashed justify-between lg:flex-col border-b lg:border-none border-border-highlight pb-xs lg:pb-0'>
        <h2 className='text-[40px] sm:text-[64px] lg:text-[96px] font-montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-text-primaryBlue to-[#0057BB] text-transparent bg-clip-text'>
          &gt;<span>20</span>
        </h2>{" "}
        <p className='text-right text-[#151D2F] lg:text-center text-res-link lg:text-lg lg:mt-[19px]'>
          Years of Experience
        </p>{" "}
      </div>
      <div className='flex items-center border-dashed justify-between lg:flex-col border-b lg:border-none border-border-highlight pb-xs lg:pb-0'>
        <h2 className='text-[40px] sm:text-[64px] lg:text-[96px] font-montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-text-primaryBlue to-[#0057BB] text-transparent bg-clip-text'>
          <span>40</span>+
        </h2>{" "}
        <p className='text-right text-[#151D2F] lg:text-center text-res-link lg:text-lg lg:mt-[19px]'>
          Financial Institutions
        </p>{" "}
      </div>
      <div className='flex items-center border-dashed justify-between lg:flex-col border-b lg:border-none border-border-highlight pb-xs lg:pb-0'>
        <h2 className='text-[40px] sm:text-[64px] lg:text-[96px] font-montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-text-primaryBlue to-[#0057BB] text-transparent bg-clip-text'>
          &gt;<span>200</span>m
        </h2>{" "}
        <p className='text-right text-[#151D2F] lg:text-center text-res-link lg:text-lg lg:mt-[19px]'>
          Customers Each
        </p>{" "}
      </div>
    </div>
  );
}

export default CustomerInfo;
