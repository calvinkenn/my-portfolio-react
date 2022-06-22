import React from "react";
import SkillsItem from "./SkillsItem";

const skillsImage = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "html",
    id: 0,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    alt: "CSS",
    id: 1,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JAVASCRIPT",
    id: 2,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    alt: "PHP",
    id: 3,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "REACT",
    id: 4,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "NODEJS",
    id: 5,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    alt: "MONGODB",
    id: 6,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
    alt: "UNITY3D",
    id: 7,
  },
];

const Skills = () => {
  return (
    <div className="d-flex justify-content-center gap-3">
      {skillsImage?.map((item) => (
        <SkillsItem link={item.src} key={item.id} />
      ))}
    </div>
  );
};

export default Skills;
