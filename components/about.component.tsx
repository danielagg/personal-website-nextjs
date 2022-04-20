import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <div
      id="about"
      className="w-full lg:w-2/3 my-12 lg:my-32 px-4 leading-loose"
    >
      <div className="w-full flex flex-col-reverse lg:flex-row justify-end items-center space-x-0 lg:space-x-16 text-center lg:text-right">
        <div className="w-full lg:w-1/2 text-base lg:text-xl px-4 lg:px-0 mt-12 lg:mt-0 lg:mr-12">
          I&apos;m Daniel Agg, a Hungarian Full Stack Developer, with more than
          six years of experience in building applications for enterprises.
        </div>
        <Image
          src="/profile.jpeg"
          alt="Picture of Daniel Agg"
          width={156}
          height={156}
          className="mb-12 lg:mb-0 block rounded-full shadow"
        />
      </div>

      <div className="mt-12 lg:mt-24 px-4 lg:px-0 text-sm lg:text-base text-center lg:text-left flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-12 lg:space-y-0 lg:space-x-32">
        <div className="w-full lg:w-1/2 flex flex-col space-y-8">
          <p>
            I&apos;ve started my career as a .NET developer, working almost
            exclusively on ASP.NET and ASP.NET Core backends, before deciding to
            immerse myself in the world of modern frontend development, aiming
            to become a competent full-stack engineer.
          </p>

          <p>
            As of today, on my day-to-day work I switch between developing a
            React frontend (using Typescript, TailwindCSS and react-query), an
            ASP.NET Core backend (following Domain Driven Design principals) and
            general infrastructure development on Azure, with Terraform.
          </p>

          <div>
            For more information, please{" "}
            <span
              className="cursor-pointer text-green-500 hover:underline"
              onClick={() => window.open("/DanielAgg_CV.pdf")}
            >
              download my CV
            </span>
            .
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col space-y-10">
          <Experience
            title="Full Stack Developer"
            period="2021 - Present"
            employerName="Apiumhub"
            employerUrl="https://apiumhub.com/"
            desc="I'm currently employed as a full stack developer, working on a React front-, and an ASP.NET Core Web API backend."
          />
          <Experience
            title="Full Stack Developer"
            period="2018 - 2021"
            employerName="Glownexus"
            employerUrl="https://www.glownexus.com/"
            desc="I was employed as a full stack developer, working on a React front-, and an ASP.NET Core Web API backend. I also participated in DevOps duties and general infrastructure development with Azure."
          />
          <Experience
            title=".NET Developer"
            period="2016 - 2018"
            employerName="Atos Consulting"
            employerUrl="https://atos.net/en-hu/hungary/atos-consulting"
            desc="I was working on various, brown-field backends developed in the .NET ecosystem - mostly via ASP.NET with WCF."
          />
        </div>
      </div>
    </div>
  );
};

const Experience = ({
  title,
  period,
  desc,
  employerName,
  employerUrl,
}: {
  title: string;
  period: string;
  desc?: string;
  employerName: string;
  employerUrl: string;
}) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-2">
          <span className="text-xl font-bold">{title}</span>
          <a
            href={employerUrl}
            target="_blank"
            rel="noreferrer"
            className="text-green-500 hover:underline cursor-pointer"
          >
            {" "}
            @ {employerName}
          </a>
        </div>
        <div className="mt-2 lg:mt-0 text-xs lg:text-sm opacity-50">
          {period}
        </div>
      </div>
      <div className="mt-4 lg:mt-2">{desc}</div>
    </div>
  );
};
