import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

import html from "../assets/tech/htmlcss.svg";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import reactjs from "../assets/tech/reactjs.png";
import angular from "../assets/tech/angular.png";
import tailwind from "../assets/tech/tailwind.png";
import php from "../assets/tech/php.png";
import laravel from "../assets/tech/laravel.png";
import java from "../assets/tech/java.png";
import springboot from "../assets/tech/springboot.png";
import git from "../assets/tech/git.png";
import docker from "../assets/tech/docker.png";
import { github } from "../assets";

const technologies = [
  { name: "HTML & CSS", icon: html },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Angular", icon: angular },
  { name: "TailwindCSS", icon: tailwind },
  { name: "PHP", icon: php },
  { name: "Laravel", icon: laravel },
  { name: "Java", icon: java },
  { name: "SpringBoot", icon: springboot },
  { name: "Docker", icon: docker },
  { name: "Github", icon: github },
];

const Tech = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || navigator.maxTouchPoints > 1;
    };
    setIsMobileDevice(checkMobile());
  }, []);

  return (
    <>
     {isMobileDevice ? (
  <div className="grid grid-cols-3 gap-4 px-4">
    {technologies.map((tech) => (
      <div
        key={tech.name}
        className="flex flex-col items-center bg-gray-800 rounded-2xl p-4 shadow-lg w-full h-24"
      >
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-12 h-12 object-contain mb-2"
        />
        <p className="text-xs text-white text-center">{tech.name}</p>
      </div>
    ))}
  </div>
) : (

<div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies.map((technology) => (
      <div className="w-28 h-28" key={technology.name}>
        <BallCanvas icon={technology.icon} />
      </div>
    ))}
  </div>
)}

    </>
  );
};

export default SectionWrapper(Tech, "");
