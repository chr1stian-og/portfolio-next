import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import script from "next/script";
import Head from "next/head";
import Image from "next/image";
import Background from "../components/Background.js";
import GlassButton from "../components/GlassButton.js";
import Link from "next/link";
import GlassFrame from "../components/GlassFrame";
import Cursor from "../components/cursor.js";

const back = require("../assets/icons/back.svg");
const pauseIcon = require("../assets/icons/pause-circle.svg");
const playIcon = require("../assets/icons/play.svg");
const downloadIcon = require("../assets/icons/download.svg");

function Contact() {
  const handleClick = () => {
    alert("Clicked");
  };

  function contactForm(e) {
    alert("Email sent");
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_uaxwktv",
    //     "template_zhmszrn",
    //     e.target,
    //     "QXKIOsJR522n30JF-"
    //   )
    //   .then(
    //     (result) => {
    //       console.log("Code: ", result, "Email Sent");
    //     },
    //     (error) => {
    //       console.log("Error while Sending email", error.text);
    //     }
    //   );
  }

  return (
    <>
      <Cursor />
      <Head>
        <title>Christian</title>
        <meta name="description" content="web portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <Background />
        </div>

        <Navbar image={back} type="CONTACT" />
        <main className="flex flex-col items-center justify-center h-screen">
          <form>
            <div className="glass-frame flex flex-col items-center gap-10 sm:gap-10">
              <div className="flex flex-col gap-1 sm:gap-4 rounded-xl px-4 py-2 min-w-full  sm:min-w-[500px]">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <label
                    className="glass-text-bold sm:glass-text"
                    style={{ textTransform: "uppercase" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="glass-input"
                    // placeholder="Type your name"
                  />
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <label
                    className="glass-text-bold sm:glass-text"
                    style={{ textTransform: "uppercase" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="glass-input"
                    // placeholder="Type your email"
                  />
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <label
                    className="glass-text-bold sm:glass-text"
                    style={{ textTransform: "uppercase" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="glass-input"
                    // placeholder="Type a nice text..."
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end align-right items-center gap-4">
                <Link href="/">
                  <button className="rounded-md text-[#a4a4a4] border-[#a4a4a4] border-2 text-xl px-4 py-1">
                    Home
                  </button>
                </Link>
                <button className="bg-[#a4a4a4] border-[#a4a4a4] border-2 rounded-md text-[#4d4d4d73] text-xl px-4 py-1">
                  Send
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default Contact;
