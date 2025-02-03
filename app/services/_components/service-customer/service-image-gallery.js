"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function ServiceImageGallery({ images }) {
  const [imageWidth, setImageWidth] = useState(0);

  // Dynamically calculate the width of each image based on its aspect ratio
  useEffect(() => {
    const imageElement = document.createElement("img");
    imageElement.src = images[0];
    imageElement.onload = () => {
      const aspectRatio = imageElement.width / imageElement.height;
      setImageWidth(170 * aspectRatio);
    };
  }, [images]);

  const duplicatedImages = [...images, ...images];

  return (
    <div className='mt-lg overflow-hidden relative' style={{ width: "100%" }}>
      <div className='image-gallery-wrapper'>
        <div className='image-scroll'>
          {duplicatedImages.map((logo, index) => (
            <div
              key={index}
              className='!w-[170px] flex items-center my-auto'
              style={{ width: `${imageWidth}px` }}
            >
              <picture className='relative flex items-stretch bg-cover'>
                <Image
                  src={logo}
                  alt={`Gallery Image ${index + 1}`}
                  width={720}
                  height={560}
                  className='w-full h-36 object-contain cursor-pointer'
                  priority
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceImageGallery;
