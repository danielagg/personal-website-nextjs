"use client";

import { Button } from "./components/Button";

export const Intro = () => {
  return (
    <div className="my-24 lg:my-64 flex items-center justify-center w-full lg:w-3/4 relative">
      <div className="hidden lg:block z-0 absolute top-0 right-0 w-96 h-96 -mt-32 -mr-32 bg-gray-100 dark:bg-[#0a101f] rounded-full" />
      <div className="z-10 w-full text-right flex flex-col">
        <div className="font-bold text-4xl lg:text-7xl">Hi, I&apos;m Dan.</div>
        <div className="text-xl lg:text-2xl mt-4">
          I&apos;m a Full Stack Developer, employed by{" "}
          <a href="https://apiumhub.com/" target="_blank" rel="noreferrer">
            <span className="font-bold text-green-700 dark:text-emerald-500 cursor-pointer hover:text-green-600 dark:hover:text-emerald-400">
              Apiumhub.
            </span>
          </a>
        </div>
        <div className="mt-10 text-lg w-full lg:w-4/5 pl-0 lg:pl-24 self-end text-gray-500">
          I&apos;m a Full Stack Developer, with 6+ years of experience, building
          back-, and frontends with various technologies, designing and
          developing scalable infrastructures on Microsoft Azure.
        </div>

        <div className="mt-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:items-center space-x-0 lg:space-x-4 lg:self-end">
          <Button
            variant="filled-gray-hover-green"
            text="Portfolio"
            onClick={() => {
              const anchorEl = document.getElementById("projects");
              if (anchorEl) {
                anchorEl.scrollIntoView();
              }
            }}
          />
          <Button
            variant="outlined"
            text="Get in Touch"
            onClick={() => {
              const anchorEl = document.getElementById("contact");
              if (anchorEl) {
                anchorEl.scrollIntoView();
              }
            }}
          />
        </div>
        <div className="mt-4">
          ...or download{" "}
          <span
            onClick={() => window.open("/DanielAgg_CV.pdf")}
            className="text-green-700 dark:text-emerald-500 cursor-pointer hover:text-green-600 dark:hover:text-emerald-400"
          >
            my CV
          </span>
          , or view{" "}
          <span
            onClick={() => window.open("/blog", "_self")}
            className="text-green-700 dark:text-emerald-500 cursor-pointer hover:text-green-600 dark:hover:text-emerald-400"
          >
            my blog
          </span>
          .
        </div>
      </div>
    </div>
  );
};
