import Link from "next/link";

function FooterBottom() {
  return (
    <div className='bg-background-footerBottom px-6 md:px-0'>
      <div className='container flex flex-col items-center justify-between py-6 text-res-body-p2 text-text-primaryBlue lg:flex-row lg:text-body-p2 mx-auto'>
        <p>
          <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
        </p>
        <div className='flex items-center gap-[14px] mt-4 lg:mt-0'>
          <div>
            <Link
              className='transition-colors duration-300 hover:text-text-footerHover'
              href='/en/privacy-policy'
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
