import Customer from "./_components/main/customer/customer";
import FutureFinance from "./_components/main/finance/future-finance";
import HeroSection from "./_components/main/hero/hero";
import Philosophy from "./_components/main/philosophy/philosophy";
import Technology from "./_components/main/technology/technology";

export default function Home() {
  return (
    <main className='font-inter'>
      <HeroSection />
      <FutureFinance />
      <Philosophy />
      <Technology />
      <Customer />
    </main>
  );
}
