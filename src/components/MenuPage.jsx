import React, { useCallback, useMemo } from "react";

const MenuPage =React.memo(({hidden, handleHidden, refHome, refAbout, refWorks, refContact, scrollToSection}) => {

    const handleHomeClick = useCallback(() => {
        scrollToSection(refHome);
        handleHidden();
    }, [scrollToSection, refHome, handleHidden]);

    const handleAboutClick = useCallback(() => {
        scrollToSection(refAbout);
        handleHidden();
    }, [scrollToSection, refAbout, handleHidden]);

    const handleWorksClick = useCallback(() => {
        scrollToSection(refWorks);
        handleHidden();
    }, [scrollToSection, refWorks, handleHidden]);

    const handleContactClick = useCallback(() => {
        scrollToSection(refContact);
        handleHidden();
    }, [scrollToSection, refContact, handleHidden]);


    return(
        <div className={`fixed top-0 right-0 left-0 z-20 h-full bg-zinc-900 ${hidden ? "translate-x-0" : "translate-x-full"} transition-all duration-300 ${hidden ? "opacity-100" : "opacity-0 pointer-events-none"}`} >
            <div className=" flex justify-between px-10 py-5 font-bold text-3xl border-b-1 border-amber-50">
                <button onClick={()=>handleHidden()} className="text-amber-50 font-bold text-3xl">X</button>
                <h1 className="text-amber-50 font-bold text-3xl">Menu</h1>
            </div>
            <div className="flex flex-col justify-around items-center h-[90vh] py-10 ">
                <button onClick={handleHomeClick}
                 className="text-5xl text-amber-50 font-bold border-2 border-amber-50 rounded-2xl w-[80%] h-20 flex justify-center items-center">HOME</button>
                <button onClick={handleAboutClick}
                 className="text-5xl text-amber-50 font-bold border-2 border-amber-50 rounded-2xl w-[80%] h-20 flex justify-center items-center">ABOUT</button>
                <button onClick={handleWorksClick}
                 className="text-5xl text-amber-50 font-bold border-2 border-amber-50 rounded-2xl w-[80%] h-20 flex justify-center items-center">WORKS</button>
                <button onClick={handleContactClick}
                 className="text-5xl text-amber-50 font-bold border-2 border-amber-50 rounded-2xl w-[80%] h-20 flex justify-center items-center">CONTACT</button>
            </div>
        </div>
    )
})

export default MenuPage