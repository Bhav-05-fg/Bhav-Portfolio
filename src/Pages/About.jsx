import { motion } from "framer-motion";

function About({ aboutRef }) {
  const skills = [
    { name: "HTML", img: "skills/html.png" },
    { name: "CSS", img: "skills/css.png" },
    { name: "JavaScript", img: "skills/javascript.png" },
    { name: "React.JS", img: "skills/react_js.png" },
    { name: "Tailwind CSS", img: "skills/tailwind_css.png" },
    { name: "Git/Github", img: "Socials/brand-github.svg", className: "invert" },
  ];

  return (
    <div ref={aboutRef} className="flex items-center justify-center h-full pt-40">
      <div className="flex flex-col w-full lg:mt-10 h-full lg:flex-row lg:justify-center lg:gap-[15vw] max-lg:items-center xl:gap-[10vw] 2xl:gap-[15vw]">
        
        {/* About Text */}
        <div className="flex flex-col items-center box-border mb-30 w-[85vw] sm:w-[60vw] lg:w-xs xl:w-lg">
          <h1 className="text-4xl text-center text-[#F5EEE6] font-bold sm:text-5xl lg:text-4xl xl:w-md 2xl:w-lg 2xl:text-6xl">
            Hi, I'm <strong><span className="text-back">Bhavarth</span> Manikpuri</strong>
          </h1>
          <p className="text-center text-[#F5EEE6] text-md mt-5 sm:text-xl lg:text-base xl:w-sm 2xl:w-md 2xl:text-2xl">
            A frontend web developer from Raipur, C.G., India. I specialize in building responsive websites using HTML, CSS, JavaScript, and React. My passion for web development started in school, and I've since worked on projects like e-commerce sites and personal blogs, focusing on performance and accessibility. I always wondered how code turns into functional and beautiful websites, and that’s when I decided to become a Web Developer. When I'm not coding, I enjoy learning new things. I'm excited to take on new challenges—check out my work or reach out!
          </p>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col items-center w-[90vw] sm:w-[60vw] lg:w-fit">
          <h1 className="text-6xl text-[#F5EEE6] font-bold mb-10 lg:text-5xl 2xl:text-7xl">Skills</h1> 
          <div className="flex flex-col overflow-y-auto scroll h-[70dvh] w-[90vw] sm:w-[60vw] lg:w-[35vw] lg:h-[60vh] xl:w-lg xl:h-[50vh]">

            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1, delay: index * 0.1 }} // Added staggered animation
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 py-5 border-b border-amber-50"
              >
                {index % 2 === 0 ? (
                  <>
                    <img src={skill.img} alt={`/${skill.name}_LOGO`} className={`place-self-center h-30 w-30 sm:h-35 sm:w-35 lg:h-30
                      lg:w-30 xl:h-35 xl:w-35 object-contain ${skill.className || ""}`} />
                    <h1 className="text-center content-center text-[#F5EEE6] text-4xl font-bold">{skill.name}</h1>
                  </>
                ) : (
                  <>
                    <h1 className="text-center content-center text-[#F5EEE6] text-4xl font-bold">{skill.name}</h1>
                    <img src={skill.img} alt={`${skill.name}_LOGO`} className={`place-self-center object-contain h-30 w-auto sm:h-35 lg:h-30 xl:h-35 ${skill.className || ""}`} />
                  </>
                )}
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
