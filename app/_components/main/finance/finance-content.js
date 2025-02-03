"use client";

import { motion } from "framer-motion";
import FinanceImage from "./finance-image";

function FinanceContent() {
  return (
    <div className='md:space-y-sm space-y-xs'>
      <motion.h6
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
        }}
        viewport={{ once: false }}
        className='lg:text-head-6 text-res-head-6 uppercase text-text-primaryBlue font-montserrat'
      >
        POWERING THE FUTURE OF FINANCE
      </motion.h6>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
        }}
        viewport={{ once: false }}
        className='whitespace-pre-line font-montserrat text-res-head-2 text-text-secondaryBlue lg:text-head-2'
      >
        Uncovering new ways to delight customers
      </motion.h2>
      <FinanceImage />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
        }}
        viewport={{ once: true }}
        className='lg:pt-2 text-border-deepBlue'
      >
        <div>
          <div className='text-body-1'>
            <p>
              <strong>
                AnyTech is revolutionising financial technology by introducing
                innovative and real-time transaction account processing
                capabilities, specifically designed for retail financial
                services.
              </strong>
            </p>
          </div>
          <div className='text-body-1'>
            <p>
              <br />
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default FinanceContent;
