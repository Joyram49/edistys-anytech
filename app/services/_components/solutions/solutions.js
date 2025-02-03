import SoultionCardSm from "./solution-card-sm";
import SolutionCards from "./solution-cards";

const cardData = [
  {
    name: "AnyCaaS",
    link: "/solutions/anycaas",
    by: {
      alt: "AnyTech",
      asset: {
        url: "https://cdn.sanity.io/images/6jywt20u/production/84ee8af599d71ce75568b8d0829f5171c708275a-74x12.svg",
      },
    },
    details: [
      "Reimagine your card programmes with our",
      "Cards-as-a-Service (CaaS)",
      "solution. Streamline card management, deliver superior customer experiences, and more.",
    ],
  },
  {
    name: "AnyBaaS",
    link: "/solutions/anybaas",
    by: {
      alt: "AnyTech",
      asset: {
        url: "https://cdn.sanity.io/images/6jywt20u/production/84ee8af599d71ce75568b8d0829f5171c708275a-74x12.svg",
      },
    },
    details: [
      "Dive into the future of banking with our",
      "Banking-as-a-Service (BaaS)",
      "platform that gives you the tools you need to adapt and scale in today’s fast-paced digital environment.",
    ],
  },
  {
    name: "AnyPaaS",
    link: "/solutions/anypaas",
    by: {
      alt: "AnyTech",
      asset: {
        url: "https://cdn.sanity.io/images/6jywt20u/production/84ee8af599d71ce75568b8d0829f5171c708275a-74x12.svg",
      },
    },
    details: [
      "Enhance your payment processing capabilities with our",
      "Payment-as-a-Service (PaaS)",
      "solution. Experience scalable and secure infrastructure that handles transactions with ease.",
    ],
  },
];

function Solutions() {
  return (
    <>
      <div className='container mx-auto px-6 md:px-0 '>
        <h3 className='mb-sm text-center lg:mb-md text-text-secondaryBlue text-res-head-3 lg:text-head-3 font-montserrat'>
          Our solutions
        </h3>
        <SolutionCards cardData={cardData} />
        <SoultionCardSm cardData={cardData} />
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

export default Solutions;
