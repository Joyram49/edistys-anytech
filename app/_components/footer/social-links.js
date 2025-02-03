import Image from "next/image";
import Link from "next/link";

const SocialLinks = ({ linksData }) => (
  <div className='flex gap-6 lg:hidden lg:gap-10'>
    {linksData.map((link, index) => (
      <div key={index} className='flex items-center'>
        <Link href={link.href} passHref>
          <div className='flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold'>
            <div
              style={{
                display: "flex",
                alignItems: "stretch",
                backgroundSize: "cover",
              }}
              className='shrink-0'
            >
              <Image
                src={link.imgSrc}
                alt={link.imgAlt}
                width={24}
                height={24}
                quality={75}
                className='object-contain'
              />
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
);

export default SocialLinks;
