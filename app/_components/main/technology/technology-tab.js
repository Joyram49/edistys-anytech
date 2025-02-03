function TechnologyTab({ activeIndex }) {
  const tabLabels = [
    "Customer focused",
    "Agile and adaptable",
    "Compliance ready",
    "Secure and safe",
  ];

  return (
    <div className='flex-wrap space-x-4 justify-center items-center lg:flex hidden py-[32px]'>
      {tabLabels.map((label, index) => (
        <button
          key={index}
          className={`lg:text-body-p0 text-res-body-p0 !font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300 
          ${
            activeIndex === index
              ? "bg-text-footerHover text-text-primaryBlue"
              : "text-text-primaryBlue hover:bg-[#F5FAFF]"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default TechnologyTab;
