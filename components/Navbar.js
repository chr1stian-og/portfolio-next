import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ type, name, image }) => {
  const randomSuggestion = Math.random() < 0.5 ? "SOFTWARE" : "PHOTOGRAPHY";

  return (
    <div className="flex-col items-end flex sm:flex-row justify-between sm:items-center mx-8 lg:mx-16 mt-4  min-w-fit gap-4">
      <div className="min-w-fit">
        {type !== "home" && (
          <Link href="/">
            <span className="glass-text-bold">{name || ""}</span>
            {image && (
              // <button className="glass-button">
              <Image
                src={image}
                className="w-6 h-6 mix-blend-overlay"
                alt="back button"
              />
              // </button>
            )}
          </Link>
        )}
        {type === "home" && (
          <Link href="/personal">
            <span className="glass-text-bold">{name || ""}</span>
            {image && (
              <Image
                src={image}
                className="w-7 h-7 mix-blend-overlay"
                alt="back button"
              />
            )}
          </Link>
        )}
      </div>
      {/* <div className="space-x-4 lg:space-x-10 min-w-fit"> */}
      {type === "home" ? (
        <>
          <Link href="/software">
            <span className="glass-text-bold">SOFTWARE</span>
          </Link>
          <Link href="/photography">
            <span className="glass-text-bold">PHOTOGRAPHY</span>
          </Link>
        </>
      ) : (
        <span className="glass-text-bold">{type}</span>
      )}
      {/* </div> */}
      <div className="min-w-fit">
        <Link
          href={`/${
            type !== "CONTACT"
              ? "contact"
              : randomSuggestion.toLocaleLowerCase()
          }`}
        >
          <span className="glass-text-bold">
            {type !== "CONTACT" ? "CONTACT" : randomSuggestion}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
