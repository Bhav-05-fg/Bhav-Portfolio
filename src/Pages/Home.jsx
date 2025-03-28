import { motion } from "framer-motion";

function Home({ homeRef }) {
  return (
    <div ref={homeRef} className="flex items-center h-[100dvh] p-2">
      <motion.div
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col w-screen items-center justify-center mt-10 lg:flex-row lg:gap-[10vw]"
      >
        <h1 className="text-5xl font-bold text-center text-[#F5EEE6] md:text-7xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          <span className="text-yellow-200 text-6xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            FrontEnd
          </span>
          <br /> Web Developer
        </h1>

        <p className="text-xl w-80 text-center font-medium text-[#F5EEE6] md:w-80 xl:text-2xl xl:w-90 2xl:text-4xl 2xl:w-120">
          I'm a Frontend Web Developer who enjoys creating responsive and dynamic websites.
        </p>
      </motion.div>
    </div>
  );
}

export default Home;
