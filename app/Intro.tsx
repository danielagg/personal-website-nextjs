"use client";

import { Button } from "./components/Button";
import { GitHub } from "./components/Github";
import { Twitter } from "./components/Twitter";

export const Intro = () => {
  return (
    <main className="my-24 lg:my-64 flex items-center justify-center w-full relative">
      <section className="-mt-16 z-10 w-full flex flex-col">
        <h1 className="font-bold text-5xl lg:text-7xl text-primary-light dark:text-primary-dark">
          dan
        </h1>
        <h2 className="text-lg lg:text-2xl mt-1 lg:mt-4 text-primary-light dark:text-primary-dark">
          Full stack developer @{" "}
          <a
            href="https://apiumhub.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold cursor-pointer underline decoration-wavy underline-offset-8 hover:text-button-light-hover hover:dark:text-primary-dark"
          >
            Apiumhub
          </a>
        </h2>
        <p className="mt-10 text-gray-light dark:text-gray-dark w-full lg:w-3/4 leading-7 tracking-wide">
          Hi! I&apos;m Daniel Agg, a Full Stack Developer from the EU with over
          7 years of experience in building web applications, with technologies
          such as .NET, Go, TypeScript/JavaScript with React/Astro/HTMX. I have
          expertise in designing and developing scalable architectures, mostly
          on Microsoft&apos;s Azure platform.
        </p>

        <section className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 mt-12">
          <Button onClick={() => window.open("/DanielAgg_CV.pdf")}>
            Download CV
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
          <div className="flex space-x-4 pt-6 lg:pt-0 lg:pl-8">
            <GitHub />
            <Twitter />
          </div>
        </section>
      </section>
    </main>
  );
};
