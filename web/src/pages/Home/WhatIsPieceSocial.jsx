import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhatIsPieceSocial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger view on scroll once
  return (
    <div className="flex items-center justify-center bg-secondary" ref={ref}>
      <div className="flex flex-col-reverse items-center justify-center overflow-hidden lg:mx-32 lg:py-32 lg:gap-48 lg:flex-row">
        {/* Left content */}
        <motion.div
          className="flex flex-col justify-center p-8"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="mb-6">
            <h2 className="mb-4 text-3xl font-extrabold">
              What is <span className="text-accent-secondary">Piece?</span>
            </h2>
          </div>
          <h2 className="mb-4 text-2xl font-extrabold">
            Nonprofits Need Housing Help
          </h2>
          <p className="text-lg md:max-w-2xl lg:max-w-[300px]">
            There are <span className="font-bold">thousands</span> of nonprofits
            that <span className="font-bold">already</span> have the
            programmatic funding to be able to{" "}
            <span className="font-bold">provide services</span>, but nonprofits
            have specific <span className="font-bold">struggles</span> in
            obtaining mortgages and locating{" "}
            <span className="font-bold">suitable</span> properties.
          </p>
          <div className="gap-4 mt-6 flex-center">
            <div className="bg-[#1C5C3B] text-white font-bold py-2 px-4 rounded w-full lg:max-w-80 shadow-md pointer-events-none">
              This is where Piece steps in to help...
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="lg:w-1/3"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Housing"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default WhatIsPieceSocial;
