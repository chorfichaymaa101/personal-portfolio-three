import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, tripguide } from '../assets';
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from '../utils/motion';

import { jobit, portfolio} from "../assets";
import { Tilt } from "react-tilt";

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
   return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full" style={{"background": "#151030"}} >
        <div className="relative w-full h-[230px]" style={{"background": "#151030", "border-radius": "14px"}}>
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl " />
          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
           <div onClick={() => window.open(
              source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer " >
                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain " />
              </div>
          </div>
          */}
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
      
    </motion.div>
   )
}

const Works = ({language}) => {

const worksText = {
  en: {
    sectionSubText: "My Work",
    sectionHeadText: "Projects",
    paragraph:
      "Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
  },
  fr: {
    sectionSubText: "Mon Travail",
    sectionHeadText: "Projets",
    paragraph:
      "Les projets suivants présentent mes compétences et mon expérience à travers des exemples concrets de mon travail. Chaque projet est décrit brièvement avec des liens vers les dépôts de code et des démonstrations en ligne. Cela reflète ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies et à gérer efficacement les projets.",
  },
};

const projectsText = {
  en: [
    {
      name: "Personal Portfolio",
      description:
        "Developed my personal portfolio website to showcase my skills, projects, and professional experience. Built with React, Tailwind CSS, and modern web development practices, focusing on responsive design and interactive UI elements.",
      image: portfolio, // replace with a screenshot of your portfolio
      source_code_link: "#", // placeholder since you don’t have GitHub yet
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "three js", color: "green-text-gradient" },
        { name: "tailwind css", color: "pink-text-gradient" },
      ],
    },
  ],

  fr: [
    {
      name: "Portfolio Personnel",
      description:
        "Développement de mon portfolio personnel pour présenter mes compétences, projets et expériences professionnelles. Réalisé avec React et Tailwind CSS, en mettant l’accent sur le design responsive et les éléments interactifs.",
      image: portfolio, // replace with a screenshot of your portfolio
      source_code_link: "#", // placeholder
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "three js", color: "green-text-gradient" },
        { name: "tailwind css", color: "pink-text-gradient" },
      ],
    },
  ],
};



  const projects = projectsText[language];
  const texts = worksText[language];       // new texts for heading & paragraph

  return (
      <>
        <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>{texts.sectionSubText}</p>
              <h2 className={styles.sectionHeadText}>{texts.sectionHeadText}</h2>
        </motion.div>

       <div className="w-full flex">
          <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
               {texts.paragraph}
          </motion.p>
       </div>

       <div className="mt-20 flex flex-wrap justify-center gap-7 ">
        {projects.map((project, index) => (
           <ProjectCard 
           key={`project-${index}`} 
           index={index}
           {...project}
           />
        ))}
       </div>
      </>

  );
;
}
export default SectionWrapper(Works, "");
