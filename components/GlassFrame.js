import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const previous = require("../assets/icons/chevron-left.svg");
const next = require("../assets/icons/chevron-right.svg");
const info = require("../assets/icons/info.svg");

const GlassFrame = ({ onClick, title, image, onClose, description }) => {
  return (
    <div onClick={onClick} className="glass-frame">
      <div className="flex flex-row justify-between items-center">
        <Image
          src={previous}
          className="w-8 h-8 mix-blend-overlay "
          alt="previous"
        />
        <div>
          <span className="glass-text-button"> {title}</span>
          <span className="glass-text-button"> {description}</span>
          <Image src={info} className="w-6 h-6 mix-blend-overlay " alt="indo" />
        </div>
        <Image src={next} className="w-6 h-6 mix-blend-overlay " alt="next" />
      </div>
    </div>
  );
};

export default GlassFrame;
