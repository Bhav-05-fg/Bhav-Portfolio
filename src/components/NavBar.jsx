import React, { useCallback } from "react";
import { motion } from "motion/react";
import { Menu } from "lucide-react";

const NavItem = React.memo(({ label, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="text-xl font-bold text-[#F5EEE6] transition-all duration-100 ease-in-out cursor-pointer md:text-xl 2xl:text-2xl"
  >
    {label}
  </motion.button>
));

const NavBar = React.memo(
  ({ mobile, refHome, refAbout, refWorks, refContact, handleHidden, scrollToSection }) => {
    // Memoize click handlers
    const scrollToHome = useCallback(() => scrollToSection(refHome), [scrollToSection, refHome]);
    const scrollToAbout = useCallback(() => scrollToSection(refAbout), [scrollToSection, refAbout]);
    const scrollToWorks = useCallback(() => scrollToSection(refWorks), [scrollToSection, refWorks]);
    const scrollToContact = useCallback(() => scrollToSection(refContact), [scrollToSection, refContact]);
    const onMenuClick = useCallback(() => handleHidden(), [handleHidden]);

    return (
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="fixed left-0 right-0 backdrop-blur-xs z-10 w-screen md:px-8 xl:px-10 2xl:px-15"
      >
        <div className="flex justify-between items-center px-4 py-1 border-b-1 max-w-screen border-white md:px-2">
          <a href="/">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold h-7 text-yellow-200 md:text-2xl xl:text-3xl 2xl:text-4xl 2xl:h-10">
                Bhavarth
              </h1>
              <h1 className="text-2xl font-bold text-[#F5EEE6] md:text-2xl xl:text-3xl 2xl:text-4xl">
                Manikpuri
              </h1>
            </div>
          </a>
          
          {mobile ? (
            <div onClick={onMenuClick} className="cursor-pointer">
              <Menu size={30} color="#f5eee6" strokeWidth={3} absoluteStrokeWidth />
            </div>
          ) : (
            <nav className="flex justify-between items-center mr-4 w-90 sm:mr-0 md:w-90 2xl:w-110">
              <NavItem label="HOME" onClick={scrollToHome} />
              <NavItem label="ABOUT" onClick={scrollToAbout} />
              <NavItem label="WORKS" onClick={scrollToWorks} />
              <NavItem label="CONTACT" onClick={scrollToContact} />
            </nav>
          )}
        </div>
      </motion.div>
    );
  }
);

export default NavBar;