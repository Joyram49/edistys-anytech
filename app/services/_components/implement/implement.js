import ImplementCards from "./implement-cards";
import ImplementCardsSm from "./implement-cards-sm";
import ImplementInfo from "./implement-info";

const implementInfo = [
  {
    id: "new-setup",
    title: "New Setup",
    description:
      "Create banking infrastructure from the ground up to better serve your needs and your customers.",
    imageSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/dfd2c06c2fb0e17354dbcf1536a370354614a44a-50x50.svg",
    alt: "New Setup",
  },
  {
    id: "system-upgrade",
    title: "System Upgrade",
    description:
      "Modernise your current infrastructure to overcome challenges posed by legacy systems.",
    imageSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/4238f41bf03f51144006f1db1f57a09d3e08b1f3-50x50.svg",
    alt: "System Upgrade",
  },
  {
    id: "system-migration",
    title: "System Migration",
    description:
      "Seamlessly migrate your data and integrations to newer systems without business interruptions.",
    imageSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/692da3ae687ceeb284d22c859e21fb8ab9cfb55c-50x50.svg",
    alt: "System Migration",
  },
];

function Implement() {
  return (
    <>
      <div className='container mt-lg mx-auto px-6 md:px-0'>
        <ImplementInfo />
        <ImplementCards implementInfo={implementInfo} />
        <ImplementCardsSm implementInfo={implementInfo} />
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

export default Implement;
