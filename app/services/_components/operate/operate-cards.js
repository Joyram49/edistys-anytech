import HoverCard from "@/app/_components/common/hover-card";

function OperateCards({ operateInfo }) {
  return (
    <ul className='mt-lg md:grid grid-cols-2 gap-[30px] lg:grid-cols-3 hidden'>
      {operateInfo.map((service) => (
        <HoverCard data={service} key={service.id} />
      ))}
    </ul>
  );
}

export default OperateCards;
