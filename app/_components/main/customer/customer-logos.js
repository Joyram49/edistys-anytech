"use client";

import Image from "next/image";

export default function ImageGallery({ images }) {
  return (
    <div className='hidden mt-xl md:grid grid-cols-3 gap-x-16 gap-y-8 md:grid-cols-3 lg:grid-cols-5'>
      {images.map((src, index) => (
        <picture key={index} className='relative flex items-stretch bg-cover'>
          <Image
            src={src}
            alt={`Gallery Image ${index + 1}`}
            width={720}
            height={560}
            className='w-full h-36 object-contain'
            priority
          />
        </picture>
      ))}
    </div>
  );
}
