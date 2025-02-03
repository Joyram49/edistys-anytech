import HoverCard from "@/app/_components/common/hover-card";

function ImplementCards({ implementInfo }) {
  return (
    <ul className='mt-lg md:grid grid-cols-2 gap-[30px] lg:grid-cols-3 hidden'>
      {implementInfo.map((service) => (
        <HoverCard data={service} key={service.id} />
      ))}
    </ul>
  );
}

export default ImplementCards;
