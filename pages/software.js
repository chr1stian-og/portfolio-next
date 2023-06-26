import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Background from "../components/Background.js";
import GlassButton from "../components/GlassButton.js";
import Link from "next/link";
import GlassProjects from "../components/GlassProjects";
import Cursor from "../components/cursor.js";

const back = require("../assets/icons/back.svg");
const pauseIcon = require("../assets/icons/pause-circle.svg");
const playIcon = require("../assets/icons/play.svg");
const downloadIcon = require("../assets/icons/download.svg");
const github = require("../assets/icons/github.svg");

const Software = () => {
  const handleClick = () => {
    alert("Clicked");
  };
  // const [slideShowStatus, setSlideShowStatus] = useState(true);

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
          <Background />
        </div>

        <Navbar type="SOFTWARE" image={back} />
        <main className="relative z-10 flex flex-col items-center justify-center h-full">
          <GlassProjects
            title="Email-tester"
            description="Tool for testing emails"
          />
        </main>
      </div>
    </>
  );
};

export default Software;
