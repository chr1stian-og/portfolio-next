import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Background from "../components/Background.js";
import GlassButton from "../components/GlassButton.js";
import Link from "next/link";
import Cursor from "../components/cursor.js";

const back = require("../assets/icons/back.svg");
const pauseIcon = require("../assets/icons/pause-circle.svg");
const playIcon = require("../assets/icons/play.svg");
const downloadIcon = require("../assets/icons/download.svg");

const previous = require("../assets/icons/chevron-left.svg");
const next = require("../assets/icons/chevron-right.svg");
const info = require("../assets/icons/info.svg");

const Personal = () => {
  // const [slideShowStatus, setSlideShowStatus] = useState(true);

  return (
    <>
      <Cursor isVisible={false} />
      <Head>
        <title>christian</title>
        <meta name="description" content="web portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <Background />
        </div>

        <Navbar type="PERSONAL" image={back} />
        <main className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="flex flex-row align-center items-center justify-center gap-8">
            <Link
              target="_blank"
              href="https://github.com/chr1stian-og/Certificates"
            >
              <h1 className="glass-text-bold">View Certificates</h1>
            </Link>
            <GlassButton text="Download CV" type="textButton" />
          </div>
        </main>
      </div>
    </>
  );
};

export default Personal;
