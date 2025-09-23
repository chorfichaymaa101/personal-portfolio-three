import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import backend from "../assets/backend.png";
import creator from "../assets/creator.png";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card"
        style={{ background: "linear-gradient(to right, #915eff, #00f7ff)" }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border-[2px] border-transparent"
          style={{ background: "#100d25" }}
        >
          <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = ({ language = "en" }) => {

  const aboutText = {
    en: "I'm a Full-Stack Engineer with strong expertise in PHP, Java, Laravel, React, Angular, and Flutter. Passionate about creating innovative web and mobile applications, I focus on building scalable, secure, and user-friendly solutions that deliver real impact.",
    fr: "Je suis une ingénieure Full-Stack avec une solide expertise en PHP, Java, Laravel, React, Angular et Flutter. Passionnée par le développement d’applications web et mobiles innovantes, je conçois des solutions évolutives, sécurisées et conviviales qui apportent un réel impact."
  };

  const servicesText = {
    en: [
      { title: "Web Developer", icon: web },
      { title: "Mobile Developer", icon: mobile },
      { title: "Backend Developer", icon: backend },
      { title: "Full-Stack Engineer", icon: creator },
    ],
    fr: [
      { title: "Développeuse Web", icon: web },
      { title: "Développeuse Mobile", icon: mobile },
      { title: "Développeuse Backend", icon: backend },
      { title: "Ingénieure Full-Stack", icon: creator },
    ],
  };

  const services = servicesText[language];

  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        {language === "en" ? "Who I Am" : "Qui je suis"}
      </p>
      <h2 className={styles.sectionHeadText}>
        {language === "en" ? "About Me" : "À propos de moi"}
      </h2>
    </motion.div>

      <motion.div variants={textVariant()}></motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {aboutText[language]}
      </motion.p>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
