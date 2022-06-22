import React from "react";
import SkillsItem from "./SkillsItem";

const skillsImage = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "html",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    alt: "CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JAVASCRIPT",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    alt: "PHP",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "REACT",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "NODEJS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    alt: "MONGODB",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
    alt: "UNITY3D",
  },
];

const Skills = () => {
  return (
    <div className="d-flex justify-content-center gap-3">
      {skillsImage?.map((item) => (
        <SkillsItem link={item.src} />
      ))}
    </div>
  );
};

export default Skills;
