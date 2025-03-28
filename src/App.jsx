import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import MenuPage from "./components/MenuPage";

function App() {
  // State for opacity, menu visibility, and mobile view
  const [opacity, setOpacity] = useState(1);
  const [hidden, setHidden] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 640);

  // Section references
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  // Memoized function to scroll to sections
  const scrollToSection = useCallback((ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Handle background opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      setOpacity(Math.max(1 - window.scrollY / 400, 0));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile view detection
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.img
        src="/van-gogh-night.webp"
        alt="background-image"
        initial={{ opacity: 0 }}
        animate={{ opacity }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute top-0 h-[120vh] w-full -z-10 transition-all brightness-50 object-cover"
      />

      {mobile && (
        <MenuPage
          hidden={hidden}
          handleHidden={() => setHidden(!hidden)}
          refHome={homeRef}
          refAbout={aboutRef}
          refWorks={worksRef}
          refContact={contactRef}
          scrollToSection={scrollToSection}
        />
      )}

      <NavBar
        handleHidden={() => setHidden(!hidden)}
        mobile={mobile}
        refHome={homeRef}
        refAbout={aboutRef}
        refWorks={worksRef}
        refContact={contactRef}
        scrollToSection={scrollToSection}
      />

      <Home mobile={mobile} homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Projects worksRef={worksRef} />
      <Contact contactRef={contactRef} />
    </>
  );
}

export default App;
