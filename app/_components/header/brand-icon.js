import Image from "next/image";
import Link from "next/link";

function BrandIcon() {
  return (
    <div>
      <Link aria-label='Go to home page' href='/'>
        <Image
          src='/assets/icons/brandIcon.svg'
          alt='AnyTech'
          width={170}
          height={32}
          className='w-[134px] h-auto object-contain lg:w-[170px]'
          priority
        />
      </Link>
    </div>
  );
}

export default BrandIcon;
