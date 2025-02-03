import PowerCards from "./power-cards";
import PowerCardsSm from "./power-cards-sm";
import PowerInfo from "./power-info";

const services = [
  {
    id: "consult",
    title: "Consult",
    description:
      "Our breadth of consulting expertise spans from applying the latest financial technological innovations to implementing risk-control strategies.",
    imageSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/7a9cf2d3db229dc1c4653e84eceb530a6fc71dce-50x50.svg?w=50&auto=format",
    alt: "Consult",
  },
  {
    id: "implement",
    title: "Implement",
    description:
      "Combining deep technological expertise and a proven track record, we design and implement custom solutions for financial institutions that drive long-term success.",
    imageSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/9e462c2ea5be862ce8e92c40c79f4ff4dd5adf2f-50x50.svg?w=50&auto=format",
    alt: "Implement",
  },
  {
    id: "operate",
    title: "Operate",
    description:
      "We provide a full suite of operational and support services that continue throughout the product life cycle.",
    imageSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/673712175d19a9f10a1e6b9e7170572a566fa41a-50x50.svg?w=50&auto=format",
    alt: "Operate",
  },
];

function PowerOfData() {
  return (
    <>
      <div className='container mt-lg mx-auto px-6 md:px-0'>
        <PowerInfo />
        <PowerCards services={services} />
        <PowerCardsSm services={services} />
      </div>

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

export default PowerOfData;
