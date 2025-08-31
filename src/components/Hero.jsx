import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";




const Hero = ({ language }) => {

 const heroText = {
  en: {
    greeting: "Hi, I'm",
    name: "Chaymaa",
    description: "Full-stack developer building web & mobile apps with PHP, Java, Angular and React."
  },
  fr: {
    greeting: "Salut, je suis",
    name: "Chaymaa",
    description: "Développeuse full-stack créant des applications web et mobiles avec PHP, Java, Angular et React"
  },
};

  const { greeting, name, description } = heroText[language];

  
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#5573e0]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`} style={{"font-size": "50px"}}>
           {greeting} <span className="text-[#5573e0]">{name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`} style={{"font-size": "25px"}}>
               {description.split("\n").map((line, index) => (
              <span key={index}>
                {line} <br className='sm:block hidden' />  </span>
        ))}
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1 cursor-pointer'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
