import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import { intelcia, onep, snrt, ensak } from "../assets";



const experiencesText = {
  en: [
    {
      title: "Mobile Developer Intern – Final Project",
      company_name: "Intelcia IT Solutions",
      icon: intelcia, // replace with your actual icon import
      iconBg: "white",
      date: "2024–2025",
      points: [
        "Developed a Flutter mobile app for E-Parapheur, an electronic document signature and management platform for public administrations.",
        "Integrated web services, created API documentation with Swagger, and implemented unit tests to ensure system quality and robustness.",
        "Collaborated in a professional environment following development best practices and standards."
      ],
    },
       {
      title: "Academic Project – Mobile & Web App Developer",
      company_name: "ENSA Kénitra",
      icon: ensak, // replace with your actual icon import
      iconBg: "#E6DEDD",
      date: "2024–2025",
      points: [
        "Developed a native Android mobile app and a dynamic web application with Angular for a smooth multi-platform experience.",
        "Designed a scalable backend using Java Spring Boot RESTful to centralize scheduling management for students, professors, and administrators.",
        "Implemented real-time updates, makeup session management, and simplified administration of schedules.",
        "Synchronized mobile and web platforms via a unified backend."
      ],
    },
    {
      title: "Web Development Intern – CRM Project",
      company_name: "Société Nationale de Radiodiffusion et de Télévision (SNRT)",
      icon: snrt, // replace with your actual icon import
      iconBg: "white",
      date: "2023–2024",
      points: [
        "Designed and developed a complete web CRM application, managing contacts, appointments, and complaints using Laravel (backend) and React (frontend).",
        "Implemented detailed performance reports and a secure interface for effective tracking and better decision-making."
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "Office National de l’Électricité et de l’Eau Potable (ONEE)",
      icon: onep, // replace with your actual icon import
      iconBg: "#000000ff",
      date: "2022–2023",
      points: [
        "Developed a web application in PHP, JavaScript, HTML, and CSS for internal communication and support request management.",
        "The site is operational and used by the organization to improve internal management."
      ],
    },
 
  ],
  fr: [
    {
      title: "Stagiaire Développeuse – Projet de Fin d’Études",
      company_name: "Intelcia IT Solutions",
      icon: intelcia,
      iconBg: "white",
      date: "2024–2025",
      points: [
        "Développement de l’application mobile Flutter pour E-Parapheur, une plateforme électronique de signature et de gestion sécurisée de documents administratifs destinée aux administrations publiques.",
        "Intégration de webservices, mise en place de la documentation API avec Swagger et tests unitaires pour garantir la qualité et la robustesse du système.",
        "Collaboration au sein d’un environnement professionnel exigeant avec suivi des bonnes pratiques et standards de développement."
      ],
    },
      {
      title: "Projet Académique – Développeuse mobile et web",
      company_name: "ENSA Kénitra",
      icon: ensak,
      iconBg: "#E6DEDD",
      date: "2024–2025",
      points: [
        "Développement d’une application mobile native sous Android et d’une application web dynamique avec Angular pour une expérience multi-plateforme fluide.",
        "Conception d’un backend scalable en Java Spring Boot RESTful pour une gestion centralisée des emplois du temps des étudiants, professeurs et administrateurs.",
        "Gestion en temps réel des plannings, séances de rattrapage et administration simplifiée.",
        "Synchronisation des plateformes mobile et web via un backend unifié."
      ],
    },
    {
      title: "Stagiaire en Développement Web – Projet CRM",
      company_name: "Société Nationale de Radiodiffusion et de Télévision (SNRT)",
      icon: snrt,
      iconBg: "white",
      date: "2023–2024",
      points: [
        "Conception et développement d’une application CRM web complète, incluant la gestion des contacts, rendez-vous et réclamations, avec Laravel pour le backend et React pour le frontend.",
        "Mise en place de rapports de performance détaillés et d’une interface sécurisée pour un suivi efficace et une meilleure prise de décision."
      ],
    },
    {
      title: "Stagiaire en Développement Web",
      company_name: "Office National de l’Électricité et de l’Eau Potable (ONEE)",
      icon: onep,
      iconBg: "#000000ff",
      date: "2022–2023",
      points: [
        "Conception et développement d’un site web en PHP, JavaScript, HTML et CSS pour gérer les communications internes et les demandes d’assistance des employés.",
        "Le site est aujourd’hui opérationnel et utilisé par l’organisation pour améliorer la gestion interne."
      ],
    },
  
  ]
};


// Experience card component
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

// Main Experience section
const Experience = ({ language = "en" }) => {
  const experiences = experiencesText[language];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {language === "en" ? "What I have done so far" : "Ce que j'ai accompli jusqu'à présent"}
        </p>
        <h2 className={styles.sectionHeadText}>
          {language === "en" ? "Work Experience" : "Expérience Professionnelle"}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
