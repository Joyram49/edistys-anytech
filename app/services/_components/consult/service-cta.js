import ContactButton from "@/app/_components/common/cta";

function ServiceCTA() {
  return (
    <div className='mt-md lg:mt-lg flex flex-col lg:flex-row justify-between items-center text-white p-[29px] lg:p-[46px] rounded-[24px] svelte-vr11vg'>
      <div>
        <h3 className='!text-white text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat'>
          Start your transformation
        </h3>
        <p className='!text-white lg:whitespace-pre-line mt-xs lg:mt-[18px] res-text-body-p1 lg:text-body-p1 text-blue-text'>
          We are ready to serve as strategic partners to provide your
          organisation with the support you need.
        </p>
      </div>

      <ContactButton text='Talk To Us' />
    </div>
  );
}

export default ServiceCTA;
