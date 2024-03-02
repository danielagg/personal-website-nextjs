"use client";

import { Button } from "./components/Button";
import { GitHub } from "./components/Github";
import { Twitter } from "./components/Twitter";

export const Intro = () => {
  return (
    <main className="my-24 lg:my-64 flex items-center justify-center w-full relative">
      <section className="-mt-16 z-10 w-full flex flex-col">
        <h1 className="font-bold text-5xl lg:text-7xl text-primary">
          daniel agg
        </h1>
        <h2 className="text-lg lg:text-2xl mt-1 lg:mt-3 text-primary/70">
          senior full stack developer @{" "}
          <a
            href="https://openup.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold cursor-pointer underline decoration-wavy underline-offset-8 hover:text-primary"
          >
            OpenUp
          </a>
        </h2>
        <p className="mt-10 text-gray w-full lg:w-5/6 leading-7 tracking-wide">
          Hi there! I&apos;m Daniel, a Senior Full Stack Developer based in
          Amsterdam, with more than 8 years of experience in crafting modern web
          applications, using technologies such as .NET, Go, Python, TypeScript,
          JavaScript with React, NextJS & Astro{" "}
          <span className="text-[7pt]">...and HTMX.</span>
        </p>
        <p className="mt-2 text-gray w-full lg:w-5/6 leading-7 tracking-wide">
          I specialize in architecting, designing and developing scalable
          software solutions on Microsoft Azure and AWS platforms.
        </p>

        <section className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 mt-12">
          <Button onClick={() => window.open("/DanielAgg_CV.pdf")}>
            <p className="min-w-[5.5rem]">Download CV</p>
          </Button>
          <Button
            onClick={() => {
              const anchorEl = document.getElementById("contact");
              if (anchorEl) {
                anchorEl.scrollIntoView();
              }
            }}
          >
            Contact
          </Button>
          <Button
            onClick={() => window.open("https://blog.danielagg.com/", "_self")}
          >
            Blog
          </Button>
          <div className="w-full flex justify-center lg:justify-start space-x-4 pt-6 lg:pt-0 lg:pl-12">
            <GitHub />
            <Twitter />
          </div>
        </section>
      </section>
    </main>
  );
};
