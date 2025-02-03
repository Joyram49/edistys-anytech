import OperateCards from "./operate-cards";
import OperateCardsSm from "./operate-cards-sm";
import OperateInfo from "./operate-info";

const operateInfo = [
  {
    id: "operational-support",
    title: "Operational Support",
    description:
      "Deploy our team to manage and maintain your AnyTech solutions so that you can focus on your core business and strategic initiatives.",
    imageSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/7a9cf2d3db229dc1c4653e84eceb530a6fc71dce-50x50.svg",
    alt: "Operational Support",
  },
  {
    id: "personalised-services",
    title: "Personalised Services",
    description:
      "From developing new business opportunities to running backend IT maintenance, our team can also provide any other support you require.",
    imageSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/7ba6b75462dbb32531fa4a3aaf876dcb0003100c-50x50.svg",
    alt: "Personalised Services",
  },
  {
    id: "technical-support",
    title: "24/7 Technical Support",
    description:
      "Our customer success team is available around the clock to address your enquiries and resolve any issues that may arise.",
    imageSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/8a7406b0289b55c79054cdebd65e93bad0be0927-50x50.svg",
    alt: "24/7 Technical Support",
  },
];
function Operate() {
  return (
    <>
      <div className='container mt-lg mx-auto px-6 md:px-0'>
        <OperateInfo />
        <OperateCards operateInfo={operateInfo} />
        <OperateCardsSm operateInfo={operateInfo} />
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

export default Operate;
