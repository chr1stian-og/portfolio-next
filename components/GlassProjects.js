import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GlassButton from "./GlassButton";

const previous = require("../assets/icons/chevron-left.svg");
const next = require("../assets/icons/chevron-right.svg");
const info = require("../assets/icons/info.svg");
const github = require("../assets/icons/github.svg");
const like = require("../assets/icons/heart.svg");
const project1 = require("/public/landscape/20201227_183239.jpg");

const GlassProjects = ({ title, image, onClose, description }) => {
  const [isLiked, setIsLiked] = useState(false);
  const previousButton = () => {
    alert("previous project");
  };
  const nextButton = () => {
    alert("next project");
  };

  return (
    <div className="glass-project">
      <div className="flex flex-row justify-between mx-4 mt-2">
        <span className="glass-text-bold" style={{ pointerEvents: "none" }}>
          {title}
        </span>
        <Image
          src={info}
          alt="info"
          className="w-5 h-5 sm:w-6 sm:h-6 mix-blend-overlay hover:cursor-pointer"
        />
      </div>
      <div className="flex mt-2">
        <Image
          alt="project image"
          src={project1}
          className="w-[600px] mix-blend-overlay -z-10 rounded-lg"
        />
      </div>
      <Image
        alt="previous project"
        src={previous}
        onClick={previousButton}
        className="absolute top-1/2 left-4  w-8 h-8  hover:cursor-pointer"
      />
      <Image
        alt="next project"
        src={next}
        onClick={nextButton}
        className="absolute top-1/2 right-4 w-8 h-8  hover:cursor-pointer"
      />
      <div className="absolute bottom-10 right-10 flex gap-6">
        <Image
          alt="like"
          src={like}
          className="w-5 h-5 sm:w-6 sm:h-6  hover:cursor-pointer"
        />
        <Image
          alt="github"
          src={github}
          className="w-5 h-5 sm:w-6 sm:h-6  hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default GlassProjects;
