import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import { intelcia, onep, snrt, ensak, highschool } from "../assets";



const educationText = {
  en: [
     {
      title: "Engineering Degree in Computer Science",
      institution: "The National School of Applied Sciences in Kenitra (ENSAK)",
      icon: ensak,
      iconBg: "white",
      date: "2022–2025",
      points: [
        "Graduated with honors.",
        "Specialized in full-stack web and mobile development."
      ],
    },
 
    {
      title: "Preparatory Cycle",
      institution: "École Nationale des Sciences Appliquées de Kenitra (ENSAK)",
      icon: ensak,
      iconBg: "white",
      date: "2020–2022",
      points: [
        "Completed preparatory courses for engineering studies.",
      ],
    },
       {
      title: "Mohamed Ibn Elhassan Elouazzani High School",
      institution: "High School ",
      icon: highschool,
      iconBg: "#554729ff",
      date: "2019–2020",
      points: [
        "Graduated with highest honors.",
      ],
    },
   
  ],
  fr: [
      {
      title: "Diplôme d’Ingénieur en Informatique",
      institution: "École Nationale des Sciences Appliquées de Kenitra (ENSAK)",
      icon: ensak,
      iconBg: "white",
      date: "2022–2025",
      points: [
        "Diplômée avec mention Très Bien.",
        "Spécialisation en développement web et mobile full-stack."
      ],
    },
 
    {
      title: "Cycle Préparatoire",
      institution: "École Nationale des Sciences Appliquées de Kenitra (ENSAK)",
      icon: ensak,
      iconBg: "white",
      date: "2020–2022",
      points: [
        "Cours préparatoires aux études d’ingénierie.",
      ],
    },
       {
      title: "Baccalauréat en Sciences Physiques",
      institution: "Lycée Qualifiant Mohamed Ibn Elhassan Elouazzani",
      icon: highschool,
      iconBg: "#554729ff",
      date: "2019–2020",
      points: [
        "Diplômée avec la mention Très Bien.",
      ],
    },
  
  ],
};




const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);


const Education = ({ language = "en" }) => {
  const educations = educationText[language];

  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
                {language === "en" ? "My Academic Journey" : "Mon Parcours Académique"}
            </p>
            <h2 className={styles.sectionHeadText}>
                {language === "en" ? "Education" : "Éducation"}
            </h2>
        </motion.div>


      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "");
