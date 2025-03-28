<motion.div
initial={{y:-50}}
whileInView={{y:0 }}
transition={{ease:"easeInOut"}}
className="contact flex justify-center py-2 rounded-b-full transition-all duration-1000 hover:duration-300  hover:mx-50 ">
<h1 className=" font-bold text-4xl text-[#F5EEE6] contact transition-all hover:scale-110 ">CONTACT ME</h1>
</motion.div>

import { motion } from "framer-motion";

const socialLinks = [
  { href: "https://www.instagram.com/bhav_05_fg/", imgSrc: "Socials/brand-instagram.svg", alt: "Instagram" },
  { href: "https://github.com/Bhav-05-fg", imgSrc: "Socials/brand-github.svg", alt: "GitHub" },
  { href: "https://x.com/Bhav_05_fg", imgSrc: "Socials/brand-x.svg", alt: "X (Twitter)" }
];

function Contact({ contactRef }) {
  return (
    <div ref={contactRef} className="bg-[#F5EEE6] pb-10">
      {/* Header */}
      <motion.div
        initial={{y:-50}}
        whileInView={{y:0 }}
        transition={{ease:"easeInOut"}}
        className="contact flex justify-center py-2 rounded-b-full transition-all duration-1000 hover:duration-300  hover:mx-50 ">
        <h1 className=" font-bold text-4xl text-[#F5EEE6] contact transition-all hover:scale-110 ">CONTACT ME</h1>
      </motion.div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-around items-center mt-10">
        {/* Email Section */}
        <div className="text-center">
          <h1 className="text-3xl underline font-bold text-[#181818] mb-4">E-Mail</h1>
          <div className="flex items-center justify-center">
            <img
              src="Socials/envelope.svg"
              alt="Email Icon"
              className="h-8 mr-3 transition-transform hover:scale-110"
            />
            <h2 className="text-lg hover:underline">manikpuribhavarth@gmail.com</h2>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="text-center mt-10 md:mt-0">
          <h1 className="text-3xl underline font-bold text-[#181818] mb-4">Socials</h1>
          <div className="flex space-x-6">
            {socialLinks.map(({ href, imgSrc, alt }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                <img src={imgSrc} alt={alt} className="h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
