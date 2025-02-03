"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

function Counter({ start = 0, to }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className='inline-block min-w-[80px] text-center'>
      {isInView ? <CountUp start={start} end={to} duration={2} /> : start}
    </span>
  );
}
function CustomerInfo() {
  return (
    <div className='items-center justify-between space-y-6 lg:space-y-0 lg:flex xl:mx-28'>
      <div className='flex items-center border-dashed justify-between lg:flex-col border-b lg:border-none border-border-highlight pb-xs lg:pb-0'>
        <h2 className='text-[40px] sm:text-[64px] lg:text-[96px] font-montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-text-primaryBlue to-[#0057BB] text-transparent bg-clip-text'>
          &gt; <Counter to={20} />
        </h2>{" "}
        <p className='text-right text-[#151D2F] lg:text-center text-res-link lg:text-lg lg:mt-[19px]'>
          Years of Experience
        </p>{" "}
      </div>
      <div className='flex items-center border-dashed justify-between lg:flex-col border-b lg:border-none border-border-highlight pb-xs lg:pb-0'>
        <h2 className='text-[40px] sm:text-[64px] lg:text-[96px] font-montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-text-primaryBlue to-[#0057BB] text-transparent bg-clip-text'>
          <Counter to={40} />+
        </h2>{" "}
        <p className='text-right text-[#151D2F] lg:text-center text-res-link lg:text-lg lg:mt-[19px]'>
          Financial Institutions
        </p>{" "}
      </div>
      <div className='flex items-center border-dashed justify-between lg:flex-col border-b lg:border-none border-border-highlight pb-xs lg:pb-0'>
        <h2 className='text-[40px] sm:text-[64px] lg:text-[96px] font-montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-text-primaryBlue to-[#0057BB] text-transparent bg-clip-text'>
          &gt; <Counter to={200} />m
        </h2>{" "}
        <p className='text-right text-[#151D2F] lg:text-center text-res-link lg:text-lg lg:mt-[19px]'>
          Customers Each
        </p>{" "}
      </div>
    </div>
  );
}

export default CustomerInfo;
