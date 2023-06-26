import Head from "next/head";
import Image from "next/image";
import Background from "../components/Background.js";
import Navbar from "../components/Navbar.js";
import GlassButton from "../components/GlassButton.js";
import Link from "next/link";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import GlassFrame from "../components/GlassFrame.js";
import { motion } from "framer-motion";
import Cursor from "../components/cursor.js";
import { useRouter } from "next/router.js";

const pauseIcon = require("../assets/icons/pause-circle.svg");
const playIcon = require("../assets/icons/play-circle.svg");
const downArrow = require("../assets/icons/chevron-down.svg");

const Home = () => {
  const [playing, setPlaying] = useState(false);

  const handleValueChange = (playing) => {
    setPlaying(playing);
  };
  const router = useRouter();

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
          <Background status={playing} timer={2500} />
        </div>

        <Navbar type="home" name="CHRISTIAN" router={router} />
        <main className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="flex flex-row align-center items-center justify-center gap-8">
            <div className="glass-frame">
              <h1
                // onMouseEnter={textEnter}
                // onMouseLeave={textLeave}
                className="glass-text-main"
              >
                Christian MacArthur
              </h1>
              <center>
                <Typewriter
                  options={{ skipAddStyles: true, loop: true }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(1000)
                      .changeDeleteSpeed(5000)

                      .typeString("Developer")
                      .pauseFor(1500)
                      .deleteAll()
                      .pauseFor(1500)

                      .typeString("Designer")
                      .pauseFor(1500)
                      .deleteAll()
                      .pauseFor(1500)

                      .typeString("Network Engineer")
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString("")
                      .start();
                  }}
                />
              </center>
            </div>
          </div>
        </main>

        <div className="absolute bottom-6 w-full z-10">
          <center>
            <GlassButton
              playing={playing}
              displayImageButton="true"
              isPlaying={handleValueChange}
              border={false}
            />
          </center>
        </div>
      </div>
    </>
  );
}

export default Home;
