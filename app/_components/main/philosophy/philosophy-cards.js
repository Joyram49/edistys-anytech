"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    imgSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?auto=format",
    alt: "Full suite solutions",
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    id: 2,
    imgSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?auto=format",
    alt: "Simplify the complex",
    title: "Simplify the complex",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
  },
  {
    id: 3,
    imgSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?auto=format",
    alt: "Cutting-edge tech",
    title: "Cutting-edge tech",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
  },
];

function PhilosophyCards() {
  return (
    <ul className='grid lg:grid-cols-3 grid-cols-2 gap-[30px]'>
      {cardData.map((card, index) => (
        <motion.li
          key={card.id}
          className='translate-y-[20%] opacity-0 z-20 h-full md:space-y-sm space-y-[8px] bg-background-cardBlue rounded-[20px] md:p-md p-sm text-border-deepBlue'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: index * 0.2,
          }}
          viewport={{ once: true }}
        >
          <figure className='w-fit rounded-full'>
            <Image
              src={card.imgSrc}
              alt={card.alt}
              width={50}
              height={50}
              className='lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]'
              loading='lazy'
            />
          </figure>
          <h4 className='font-montserrat text-text-secondaryBlue text-res-head-4 lg:text-head-4'>
            {card.title}
          </h4>
          <p className='text-body-1'>{card.description}</p>
        </motion.li>
      ))}
    </ul>
  );
}

export default PhilosophyCards;
