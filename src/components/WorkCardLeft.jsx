import React, { useMemo } from "react";
import { motion } from "motion/react";

const WorkCard = React.memo(({ image, name }) => {

  const fadeInAnimation = useMemo(() => ({
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
    viewport: { once: true }
  }), []);

  return (
    <div className="flex flex-col items-center h-full mb-15 transition-all ease-in-out hover:scale-95 cursor-pointer md:mr-[20vw] xl:mr-[30vw]">
      <motion.div 
        {...fadeInAnimation}
        className="h-fit bg-amber-50 rounded-lg img-div overflow-hidden"
      >
        <motion.img 
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          src={image} 
          alt={`${name} thumbnail`} 
          className="h-40 place-self-center mb-5 aspect-video object-cover rounded-md xl:h-60 2xl:h-70" 
          loading="lazy"
        />
      </motion.div>
      <motion.div {...fadeInAnimation}>
        <h2 className="text-[#F5EEE6] mb-3 text-3xl font-bold xl:text-4xl 2xl:text-5xl">{name}</h2>
      </motion.div>
    </div>
  );
});

export default WorkCard;