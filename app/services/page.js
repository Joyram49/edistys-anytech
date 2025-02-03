import Consult from "./_components/consult/consult";
import ServiceHeroSection from "./_components/hero/hero";
import Implement from "./_components/implement/implement";
import Operate from "./_components/operate/operate";
import PowerOfData from "./_components/power/power-of-data";
import ServiceCustomer from "./_components/service-customer/service-customer";
import Solutions from "./_components/solutions/solutions";

function ServicePage() {
  return (
    <main className='font-inter'>
      <ServiceHeroSection />
      <PowerOfData />
      <Consult />
      <Implement />
      <Operate />
      <Solutions />
      <ServiceCustomer />
    </main>
  );
}

export default ServicePage;
