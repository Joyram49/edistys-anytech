import FinanceContent from "./finance-content";
import FinanceImageSm from "./finance-image-sm";

function FutureFinance() {
  return (
    <>
      <section className='container mt-[62px] mx-auto px-6 md:px-0'>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative  justify-center items-center'>
          <FinanceContent />
          <FinanceImageSm />
        </div>
      </section>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        className='undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]'
        preserveAspectRatio='xMidYMid slice'
        viewBox='0 0 1920 280'
      >
        <path
          fill='url(#paint0_linear_6055_471)'
          d='M-240 0h1920L-240 280z'
          opacity='0.7'
        ></path>
        <defs>
          <linearGradient
            id='paint0_linear_6055_471'
            x1='458.5'
            x2='392.705'
            y1='1561.14'
            y2='52.188'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#1F80F0'></stop>
            <stop offset='1' stopColor='#1F80F0' stopOpacity='0'></stop>
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}

export default FutureFinance;
