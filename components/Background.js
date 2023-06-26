import React, { useEffect, useState } from "react";
import Image from "next/image";

const landscapeImages = [
  "/landscape/IMG_6328.jpg",
  "/landscape/IMG_6323.jpg",
  "/landscape/IMG_0234.jpg",
  "/landscape/IMG_6324.jpg",
  "/landscape/IMG_4605.jpg",
];
const portraitImages = [
  "/portrait/IMG_0236.jpg",
  "/portrait/IMG_0237.jpg",
  "/portrait/IMG_0597.jpg",
  "/portrait/IMG_7036.jpg",
  "/portrait/IMG_2052.jpg",
];

const BackgroundImage = ({ status, timer }) => {
  const [currentImageFile, setCurrentImageFile] = useState(landscapeImages);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (status) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % currentImageFile.length
        );
      }, timer);

      return () => {
        clearInterval(interval);
      };
    }
  }, [status, timer, currentImageFile.length]);

  useEffect(() => {
    if (currentImageFile && currentImageFile.length > 0) {
      setCurrentImageFile(currentImageFile);
    }
  }, [currentImageIndex, currentImageFile]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        if (window.innerWidth >= 768) {
          setCurrentImageFile(landscapeImages);
        } else {
          setCurrentImageFile(portraitImages);
        }
      } catch (e) {
        setCurrentImageFile(landscapeImages);
      }
    }
  }, []);

  const image = currentImageFile[currentImageIndex];

  return (
    <div className="top-0 left-0 w-screen h-screen overflow-hidden">
      <div className="w-full h-full absolute inset-0 z-[-1]">
        <Image
          src={image}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default BackgroundImage;
