import Head from "next/head";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const cursor = ({ isVisible }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        duration: 0, // Set the duration to 0 for instant animation
      },
    },
    text: {
      height: 75,
      width: 75,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "black",
      mixBlendMode: "overlay",
      backdropFilter: "0px",
      transition: {
        duration: 0, // Set the duration to 0 for instant animation
      },
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <motion.div
      className={isVisible ? "cursor" : "cursor-default"}
      variants={variants}
      animate={cursorVariant}
    />
  );
};

export default cursor;
