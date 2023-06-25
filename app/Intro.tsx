"use client";

import { Button } from "./components/Button";
import { GitHub } from "./components/Github";
import { Twitter } from "./components/Twitter";

export const Intro = () => {
  return (
    <div className="my-24 lg:my-64 flex items-center justify-center w-full relative">
      <div className="z-10 w-full flex flex-col">
        <div className="font-bold text-5xl lg:text-7xl">dan</div>
        <div className="text-lg lg:text-2xl mt-1 lg:mt-4">
          full stack developer @{" "}
          <a
            href="https://apiumhub.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold cursor-pointer underline decoration-wavy underline-offset-8"
          >
            Apiumhub
          </a>
        </div>
        <div className="mt-10 text-gray-light dark:text-gray-dark w-full lg:w-3/4 leading-7 tracking-wide">
          Hi! I&apos;m Daniel Agg, a Full Stack Developer, with 7+ years of
          experience, building back-, and frontends with various technologies,
          designing and developing scalable infrastructures on Microsoft Azure.
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 mt-12">
          <Button onClick={() => {}}>Download CV</Button>
          <Button onClick={() => {}}>Contact</Button>
          <Button onClick={() => {}}>Blog</Button>
          <div className="flex space-x-4 pt-6 lg:pt-0 lg:pl-8">
            <GitHub />
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
};
