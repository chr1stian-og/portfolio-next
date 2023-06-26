import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const pauseIcon = require("../assets/icons/pause-circle.svg");
const playIcon = require("../assets/icons/play-circle.svg");
const github = require("../assets/icons/github.svg");

const GlassButton = ({
  text,
  isPlaying,
  playing,
  displayImageButton,
  image,
  link,
  type,
  buttonClass,
  border,
}) => {
  const handleDownload = () => {
    alert("Christian CV 2023 EN - Developer.pdf");
    // const fileName = "Christian CV 2023 EN - Developer.pdf";
    // const encodedFileName = encodeURIComponent(fileName);
    // const downloadUrl = `/${encodedFileName}`;
    // const link = document.createElement("a");
    // link.href = downloadUrl;
    // link.download = fileName;
    // link.click();
  };

  const [slideShowButton, setSlideShowButton] = useState(
    playing ? pauseIcon : playIcon
  );

  const openOnGithub = () => {
    alert("Opening ", JSON.stringify(link), "on github");
  };

  const changeStatus = () => {
    if (!playing) {
      isPlaying(true);
      setSlideShowButton(pauseIcon);
    }
    if (playing) {
      isPlaying(false);
      setSlideShowButton(playIcon);
    }
  };

  return (
    <>
      {!type && (
        <button
          onClick={changeStatus}
          className={` ${!border ? "" : "glass-button"}`}
        >
          <span className="glass-text-button"> {text || ""}</span>
          {displayImageButton && (
            <Image
              src={slideShowButton}
              alt="slideshow controls"
              className={`w-8 h-8 mix-blend-overlay`}
            />
          )}
          {image && (
            <Image
              src={image}
              alt="slideshow controls"
              className="w-8 h-8 mix-blend-overlay "
            />
          )}
        </button>
      )}
      {type === "textButton" && (
        <button onClick={handleDownload} className="glass-button">
          <span
            className="font-bold text-lg sm:text-xl text-white mix-blend-overlay px-4 py-2"
            style={{ letterSpacing: "2px" }}
          >
            {text || ""}
          </span>
          {/* {displayImageButton && (
            <Image
              src={slideShowButton}
              alt="slideshow controls"
              className="w-6 h-6 mix-blend-overlay "
            /> */}
          {/* )} */}
        </button>
      )}
    </>
  );
};

export default GlassButton;
