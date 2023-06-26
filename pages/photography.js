import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Background from "../components/Background.js";
import GlassButton from "../components/GlassButton.js";
import Link from "next/link";
import Cursor from "../components/cursor.js";
import Navbar from "../components/Navbar.js";
import Carousel from "../components/Carousel.js";

const back = require("../assets/icons/back.svg");
const pauseIcon = require("../assets/icons/pause-circle.svg");
const playIcon = require("../assets/icons/play.svg");
const downloadIcon = require("../assets/icons/download.svg");

const previous = require("../assets/icons/chevron-left.svg");
const next = require("../assets/icons/chevron-right.svg");
const info = require("../assets/icons/info.svg");

const Photography = () => {
  const [playing, setPlaying] = useState(true);
  const handleValueChange = (playing) => {
    setPlaying(playing);
  };

  function handleKeyDown(event) {
    if (event.keyCode === 37) {
      alert("Previous image");
    }
    if (event.keyCode === 39) {
      alert("Next image");
    }
    if (event.keyCode === 32) {
      alert("Paused");
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Cursor isVisible={false} />
      <Head>
        <title>Christian</title>
        <meta name="description" content="web portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <Background status={playing} timer={400} />
          {/* <Carousel /> */}
        </div>
        <Navbar type="PHOTOGRAPHY" image={back} />
        <main className=" z-10 flex flex-col justify-center align-center items-center">
          <div className="glass-player absolute bottom-6 items-center">
            {!playing && (
              <Image
                src={previous}
                onClick={() => alert("previous")}
                onKeyDown={handleKeyDown}
                className="w-8 h-8 mix-blend-overlay hover:cursor-pointer "
                alt="previous"
              />
            )}
            <GlassButton
              playing={playing}
              border={false}
              displayImageButton="true"
              isPlaying={handleValueChange}
              onKeyDown={handleKeyDown}
            />
            {!playing && (
              <Image
                src={next}
                onClick={() => alert("next")}
                onKeyDown={handleKeyDown}
                className="w-8 h-8 mix-blend-overlay hover:cursor-pointer"
                alt="next"
              />
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Photography;
