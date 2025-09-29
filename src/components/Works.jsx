import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, tripguide } from '../assets';
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from '../utils/motion';
import bookstore from '../assets/bookstore.png';
import { jobit, portfolio} from "../assets";
import { Tilt } from "react-tilt";
import livelink from "../assets/link.png";
import pharmacy from "../assets/pharmacy.png";

const ProjectCard = ({index, name, description, tags, image, source_code_link, live_link}) => {
   return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 1000,
      }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full" style={{"background": "#151030"}} >
        <div className="relative w-full h-[230px]" style={{"background": "#151030", "border-radius": "14px"}}>
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl " />
          <div className="absolute inset-0 flex justify-end m-3 gap-2 card-img_hover">
          {/* GitHub Button */}
          {source_code_link && (
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          )}

          {/* Live Demo Button */}
          {live_link && (
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={livelink} alt="live demo" className="w-1/2 h-1/2 object-contain" />
            </div>
          )}
        </div>

          
          
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
      image: portfolio,
      source_code_link: "https://github.com/chorfichaymaa101/personal-portfolio-three",
      live_link: "https://chaymaachorfi.netlify.app/",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "three js", color: "green-text-gradient" },
        { name: "tailwind css", color: "pink-text-gradient" },
      ],
    },
    {
      name: "Bookstore App",
      description:
        "Built a modern bookstore app using React and Tailwind CSS. Users can browse books by category, add them to a cart, and complete checkout with a delivery form for shipping details. The design is clean, responsive, and offers smooth navigation for a better experience.",
      image: bookstore,
      source_code_link: "https://github.com/chorfichaymaa101/bookstore",
      live_link: "https://readorastore.netlify.app/",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "tailwind css", color: "pink-text-gradient" },
        { name: "react router", color: "green-text-gradient" },
      ],
    },
      {
        name: "Pharmacy Management App",
        description:
          "A responsive pharmacy stock management app built with React and Tailwind CSS. Manage medicines, stock, suppliers, orders, sales, reports, alerts, activity log, and settings with intuitive forms and mock data.",
        image: pharmacy,
        source_code_link: "https://github.com/chorfichaymaa101/Pharmacy-Stock-Management",
        live_link: "https://pharmstock.netlify.app/",
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "tailwind css", color: "pink-text-gradient" },
          { name: "react router", color: "green-text-gradient" },
        ],
      }

  ],

  fr: [
    {
      name: "Portfolio Personnel",
      description:
        "Développement de mon portfolio personnel pour présenter mes compétences, projets et expériences professionnelles. Réalisé avec React et Tailwind CSS, en mettant l’accent sur le design responsive et les éléments interactifs.",
      image: portfolio,
      source_code_link: "https://github.com/chorfichaymaa101/personal-portfolio-three",
      live_link: "https://chaymaachorfi.netlify.app/",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "three js", color: "green-text-gradient" },
        { name: "tailwind css", color: "pink-text-gradient" },
      ],
    },
    {
      name: "Application Librairie",
      description:
        "Application de librairie moderne créée avec React et Tailwind CSS. Les utilisateurs peuvent parcourir les livres par catégories, les ajouter au panier et valider leur commande via un formulaire de livraison. L’interface est claire, responsive et simple à naviguer pour une expérience fluide.",
      image: bookstore,
      source_code_link: "https://github.com/chorfichaymaa101/bookstore",
      live_link: "https://readorastore.netlify.app/",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "tailwind css", color: "pink-text-gradient" },
        { name: "react router", color: "green-text-gradient" },
      ],
    },
      {
      name: "Application de Gestion de Pharmacie",
      description:
        "Application responsive de gestion de stock de pharmacie avec React et Tailwind CSS. Gère les médicaments, le stock, fournisseurs, commandes, ventes, rapports, alertes, journal d'activité et paramètres avec formulaires intuitifs et données fictives.",
      image: pharmacy,
      source_code_link: "https://github.com/chorfichaymaa101/Pharmacy-Stock-Management",
      live_link: "https://pharmstock.netlify.app/",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "tailwind css", color: "pink-text-gradient" },
        { name: "react router", color: "green-text-gradient" },
      ],
    }

  ],
};



  const projects = projectsText[language];
  const texts = worksText[language];

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
