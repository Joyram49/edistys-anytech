import Image from "next/image";
import Link from "next/link";

function HoverCard({ data }) {
  return (
    <Link href={`#${data.id}`} key={data.id}>
      <li className='!bg-white hover:!bg-[#EBF4FF] hover:border-transparent transition-colors duration-700 z-20 h-full md:space-y-sm space-y-[8px] md:p-md p-sm  rounded-[20px] border border-border-highlight'>
        <figure className='w-fit rounded-full'>
          <Image
            srcSet={`${data.imageSrc}?w=50&auto=format 50w`}
            src={data.imageSrc}
            width='50'
            height='50'
            sizes='50px'
            alt={data.alt}
            className='lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]'
            loading='lazy'
          />
        </figure>
        <h4 className='font-montserrat text-text-secondaryBlue text-res-head-4 lg:text-head-4'>
          {data.title}
        </h4>
        <p className='text-body-1 text-text-secondaryBlue'>
          {data.description}
        </p>
      </li>
    </Link>
  );
}

export default HoverCard;
