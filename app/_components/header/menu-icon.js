"use client";

import { useModalStateHook } from "@/hooks/useModalStateHook";

function MenuIcon() {
  const {
    modalState: { isNavOpen },
    setModalState,
  } = useModalStateHook();
  const handleMenuClick = (e) => {
    e.stopPropagation();
    setModalState((state) => {
      return {
        ...state,
        isNavOpen: !state.isNavOpen,
      };
    });
  };
  return (
    <button className='cursor-pointer lg:hidden' onClick={handleMenuClick}>
      {isNavOpen ? (
        <svg
          className='fill-white'
          width='14'
          height='14'
          viewBox='0 0 14 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M8.41401 6.99998L13.707 1.70695C14.098 1.31695 14.098 0.683006 13.707 0.293006C13.316 -0.0979941 12.684 -0.0979941 12.293 0.293006L7.00001 5.58597L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.683006 -0.0979941 1.31695 0.293006 1.70695L5.58601 6.99998L0.293006 12.293C-0.0979941 12.683 -0.0979941 13.3169 0.293006 13.7069C0.488006 13.9019 0.744007 14 1.00001 14C1.25601 14 1.51201 13.9019 1.70701 13.7069L7.00001 8.41398L12.293 13.7069C12.488 13.9019 12.744 14 13 14C13.256 14 13.512 13.9019 13.707 13.7069C14.098 13.3169 14.098 12.683 13.707 12.293L8.41401 6.99998Z'></path>
        </svg>
      ) : (
        <svg
          className='fill-white'
          width='18'
          height='16'
          viewBox='0 0 18 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 2C0 0.895431 0.895431 0 2 0H18V2H0Z'></path>
          <rect y='7' width='18' height='2'></rect>
          <path d='M0 14H18V16H2C0.89543 16 0 15.1046 0 14Z'></path>
        </svg>
      )}
    </button>
  );
}

export default MenuIcon;
