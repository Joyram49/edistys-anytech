"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContactButton from "../common/cta";
import BrandIcon from "./brand-icon";
import MenuIcon from "./menu-icon";
import MobileNav from "./mobile-nav";
import NavItems from "./nav-items";

function Header() {
  const [isScrollingUp, setIsScrollingUp] = useState(true); // Start as visible
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY) {
        // Scrolling Down: Hide Header
        setIsScrollingUp(false);
      } else {
        // Scrolling Up: Show Header if past 128px
        setIsScrollingUp(true);
        setIsScrolledPast(currentY > 128);
      }

      lastY = currentY;
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-[9999] transition-transform duration-300 text-res-body-p1 lg:text-body-p1 px-6 md:px-0 font-inter 
        ${isScrollingUp ? "translate-y-0" : "-translate-y-full"}
        ${
          isScrolledPast
            ? "bg-white text-text-primaryBlue shadow-md"
            : "bg-transparent text-white"
        }
      `}
    >
      <div className='relative z-[9999] py-4 lg:py-6'>
        <div className='container flex items-center justify-between mx-auto'>
          <BrandIcon scrollPast={isScrolledPast} />
          <div className='flex items-center'>
            <NavItems scrollPast={isScrolledPast} />
            <MenuIcon scrollPast={isScrolledPast} />
          </div>
          <div className='hidden lg:block'>
            {isScrolledPast ? (
              <ContactButton text='Contact Us' />
            ) : (
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
            )}
          </div>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
