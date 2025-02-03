import ConsultImageLarge from "./consult-image-large";
import ConsultInfo from "./consult-info";
import ServiceCTA from "./service-cta";

function Consult() {
  return (
    <>
      <div className='container mt-lg  mx-auto px-6 md:px-0'>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative'>
          <ConsultInfo />
          <ConsultImageLarge />
        </div>
        <ServiceCTA />
      </div>
      <svg
        className='undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]'
        preserveAspectRatio='xMidYMid slice'
        viewBox='0 0 1920 280'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity='0.7'
          d='M-240 0L1680 0L-240 280L-240 0Z'
          fill='url(#paint0_linear_6055_471)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_6055_471'
            x1='458.5'
            y1='1561.14'
            x2='392.705'
            y2='52.1879'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#1F80F0' />
            <stop offset='1' stopColor='#1F80F0' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}

export default Consult;
