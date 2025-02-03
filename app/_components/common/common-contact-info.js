import ContactButton from "./cta";
import SVGBackgroundContactOne from "./svg-background-contact-one";
import SVGBackgroundContactTwo from "./svg-background-contact-two";

function CommonContactInfo() {
  return (
    <div
      className='relative h-[60vh] lg:h-[530px] w-full text-white bg-clip-cta overflow-hidden md:z-20 z-0 px-6 md:px-0'
      style={{
        backgroundImage:
          "radial-gradient(24.45% 88.58% at 23.57% 2%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className='container flex w-full items-start justify-center h-full relative z-10 flex-col mt-6 mx-auto'>
        <h2 className='font-montserrat text-res-head-2 text-white lg:text-head-2 font-semibold mb-[24px]'>
          Legacy no longer
        </h2>{" "}
        <p className='text-base lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-[30px]'>
          Talk to us to find out how we can transform your organisation for the
          future
        </p>{" "}
        <ContactButton text='Contact Us' />
      </div>
      <SVGBackgroundContactOne />
      <SVGBackgroundContactTwo />
    </div>
  );
}

export default CommonContactInfo;
