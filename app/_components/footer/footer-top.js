import Image from "next/image";
import Link from "next/link";

import SocialLinks from "./social-links";
const linksData = [
  {
    href: "https://www.linkedin.com/company/anytxn",
    title: "LinkedIn",
    imgSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg",
    imgAlt: "LinkedIn Logo",
  },
  {
    href: "tel:+6590021890",
    title: "Call Us",
    imgSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg",
    imgAlt: "Phone Icon",
  },
  {
    href: "mailto:enquiry@anytxn.com",
    title: "Email Us",
    imgSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg",
    imgAlt: "Email Icon",
  },
];
function FooterTop() {
  return (
    <div className='w-full bg-[#002045] px-6 md:px-0'>
      <div className='container flex items-center justify-between py-11 mx-auto '>
        <Link href='/en'>
          <Image
            src='/assets/icons/brandIcon.svg'
            width={200}
            height={32}
            data-x-lqip='false'
            data-x-lqip-transition-duration='0'
            loading='lazy'
            className='!w-[217px] !object-contain'
            alt='AnyTech'
          />
        </Link>
        <div className='hidden items-center text-text-topFooterHoverBlue lg:flex'>
          <p className='border-r border-border-deepBlue px-6 py-4 text-res-body-p1-semibold lg:text-body-p1-semibold'>
            Our Solutions
          </p>
          <ul className='flex items-center'>
            <li>
              <Link
                className='px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-text-primaryBlue lg:text-body-p1 text-white'
                href='/en/solutions/anycaas'
              >
                AnyCaaS
              </Link>
            </li>
            <li>
              <Link
                className='px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-text-primaryBlue lg:text-body-p1'
                href='/en/solutions/anybaas'
              >
                AnyBaaS
              </Link>
            </li>
            <li>
              <Link
                className='px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-text-primaryBlue lg:text-body-p1'
                href='/en/solutions/anypaas'
              >
                AnyPaaS
              </Link>
            </li>
          </ul>
        </div>
        <SocialLinks linksData={linksData} />
      </div>
    </div>
  );
}

export default FooterTop;
