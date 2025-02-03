import Link from "next/link";
import BrandIcon from "./brand-icon";
import MenuIcon from "./menu-icon";
import MobileNav from "./mobile-nav";
import NavItems from "./nav-items";

function Header() {
  return (
    <header className='w-full text-white bg-background-primaryBlue lg:bg-transparent  py-8 top-0 lg:absolute  lg:pt-[17px] lg:pb-[25px] text-res-body-p1 lg:text-body-p1 z-[9999] font-inter px-6 md:px-0'>
      <div className='relative z-[9999]'>
        <div className='container flex items-center flex-wrap justify-between mx-auto'>
          <BrandIcon />
          <div className='flex items-center'>
            <NavItems />
            <MenuIcon />
          </div>
          <div className='hidden lg:block'>
            <Link
              className='border border-white bg-transparent hover:bg-white hover:text-text-primaryBlue hidden w-full justify-center pl-6 pr-10 py-[13px] text-res-link lg:text-link lg:flex items-center group/highlight transition-all drop-shadow-button-primary hover:shadow-button-primary rounded-sm'
              href='/contact-us'
            >
              Contact Us
              <svg
                className='fill-white translate-x-3.5 transition-transform group-hover/highlight:translate-x-5 group-hover/highlight:fill-text-primaryBlue'
                width='7'
                height='11'
                viewBox='0 0 7 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M6.67969 5.89844L2.13281 10.4688C1.89844 10.6797 1.54688 10.6797 1.33594 10.4688L0.796875 9.92969C0.585938 9.71875 0.585938 9.36719 0.796875 9.13281L4.40625 5.5L0.796875 1.89062C0.585938 1.65625 0.585938 1.30469 0.796875 1.09375L1.33594 0.554688C1.54688 0.34375 1.89844 0.34375 2.13281 0.554688L6.67969 5.125C6.89062 5.33594 6.89062 5.6875 6.67969 5.89844Z'></path>
              </svg>
            </Link>
          </div>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
