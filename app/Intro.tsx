"use client";

import { Button } from "./components/Button";
import { GitHub } from "./components/Github";
import { Twitter } from "./components/Twitter";

export const Intro = () => {
  return (
    <div className="my-24 lg:my-64 flex items-center justify-center w-full relative">
      <div className="-mt-16 z-10 w-full flex flex-col">
        <h1 className="font-bold text-5xl lg:text-7xl text-primary-light dark:text-primary-dark">
          dan
        </h1>
        <h2 className="text-lg lg:text-2xl mt-1 lg:mt-4 text-primary-light dark:text-primary-dark">
          Full stack developer @{" "}
          <a
            href="https://apiumhub.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold cursor-pointer underline decoration-wavy underline-offset-8"
          >
            Apiumhub
          </a>
        </h2>
        <p className="mt-10 text-gray-light dark:text-gray-dark w-full lg:w-3/4 leading-7 tracking-wide">
          Hi! I&apos;m Daniel Agg, a Full Stack Developer with over 7 years of
          experience in building web applications, with technologies such as
          .NET, Go, TypeScript/JavaScript with React/Astro/HTMX. I have
          expertise in designing and developing scalable architectures, mostly
          on Microsoft&apos;s Azure platform.
        </p>
        <p className="mt-6 opacity-70 dark:opacity-50 text-sm w-full lg:w-3/4">
          I am passionate about researching adaptable sofware architectures,
          enabling applications to gracefully evolve over time. I have learnt
          over time that as business needs change and technology advances,
          having an architecture that can accommodate change is extremely
          important, but often neglected. As of 2023, I am a preacher of modular
          monoliths, Domain Driven Design and compartmentalizing volatile parts
          of applications, rather than religiously de-coupling them by
          functionality. As much as I enjoy geeking out over architectures, I
          like to think that I am pragmatic, always keeping in mind that my goal
          as a software developer is to deliver a working product, not the
          blueprint of it.
        </p>

        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 mt-12">
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
        </div>
      </div>
    </div>
  );
};
