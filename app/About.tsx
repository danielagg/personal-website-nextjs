"use client";

import Image from "next/image";
import { Button } from "./components/Button";
import { Card } from "./components/Card";

export const About = () => {
  return (
    <article id="about" className="w-full mt-12 text-gray">
      <div className="w-full flex lg:flex-row flex-col items-center justify-between">
        <div className="w-1/3">
          <Image
            src="/profile.png"
            alt="Picture of Daniel Agg"
            width={160}
            height={160}
            className="lg:mb-0 block rounded-full shadow dark:opacity-80 ring-profilepic ring-8"
          />
        </div>

        <div className="w-full lg:w-2/3 mt-16 leading-relaxed text-center lg:text-right space-y-4 text-sm opacity-100 dark:opacity-70">
          <p>
            I advocate for modular monoliths with vertical slicing, Domain
            Driven Design, true CI/CD with Trunk Based Development and feature
            flags, fitness functions, procedural code and compartmentalizing
            volatile parts of our applications.
          </p>
          <p>
            I&apos;m passionate about researching adaptable software
            architectures, enabling applications to gracefully evolve over time:
            I came to realize the value of an adaptable architecture, which can
            facilitate the ever-changing landscape of business needs and keep
            the tempo of development rapid, without accumulating technical debt.
          </p>
          <p>
            While I love geeking out over architectures, I like to think that
            I&apos;m also pragmatic, always keeping in mind that my goal as a
            software developer is to deliver a working product, not the
            blueprint of it.
          </p>
        </div>
      </div>

      <h1 className="mt-12 lg:mt-32 text-3xl font-bold text-gray text-center">
        My Experience
      </h1>

      <ul className="mt-8 flex flex-col space-y-8 lg:space-y-4">
        <Experience
          title="Senior Software Developer"
          period="Dec 2023 - Present"
          employerName="OpenUp"
          employerUrl="https://openup.com/"
          desc="TBD - my journey has just started."
        />
        <Experience
          title="Senior Full Stack Developer"
          period="Apr 2021 - Nov 2023"
          employerName="Apiumhub"
          employerUrl="https://apiumhub.com/"
          desc="As a full stack developer, I was working on a React front-, and an ASP.NET Core Web API backend for a B2B application, as well as taking care of the project's DevOps duties and infrastructure on Azure."
        />
        <Experience
          title="Full Stack Developer"
          period="Sep 2018 - Apr 2021"
          employerName="Glownexus"
          employerUrl="https://www.glownexus.com/"
          desc="I've worked on diverse projects, from small-scale serverless apps running on Azure Functions, to enterprise monolith solutions. My main responsibilities were around .NET backends."
        />
        <Experience
          title=".NET Developer / Junior .NET Developer"
          period="May 2016 - Sep 2018"
          employerName="Atos Consulting"
          employerUrl="https://atos.net/en-hu/hungary/atos-consulting"
          desc="I was working on various, brown-field backends developed in the .NET ecosystem (with strong emphasis on SQL)."
        />
      </ul>

      <div className="mt-12 inline-flex justify-center items-center w-full">
        <Button onClick={() => window.open("/DanielAgg_CV.pdf")}>
          Download CV
        </Button>
      </div>
    </article>
  );
};

const Experience = ({
  title,
  period,
  employerName,
  employerUrl,
  desc,
}: {
  title: string;
  period: string;
  employerName: string;
  employerUrl: string;
  desc: string;
}) => {
  return (
    <li>
      <Card>
        <>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-2">
              <div className="text-xl font-bold">{title}</div>
              <div className="hidden lg:block">@</div>
              <a
                href={employerUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline decoration-wavy underline-offset-8 cursor-pointer"
              >
                {employerName}
              </a>
            </div>
            <div className="text-sm opacity-50 dark:opacity-70">{period}</div>
          </div>
          <div className="pt-4 text-sm">{desc}</div>
        </>
      </Card>
    </li>
  );
};
