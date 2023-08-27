"use client";

import Image from "next/image";
import { Button } from "./components/Button";
import { Card } from "./components/Card";

export const About = () => {
  return (
    <div
      id="about"
      className="w-full mt-12 text-gray-light dark:text-gray-dark"
    >
      <div className="w-full flex justify-center items-center">
        <Image
          src="/profile.jpeg"
          alt="Picture of Daniel Agg"
          width={156}
          height={156}
          className="mb-12 lg:mb-0 block rounded-full shadow dark:opacity-80 ring-profilepic-light dark:ring-profilepic-dark ring-8"
        />
      </div>

      <div className="mt-6 lg:mt-16">
        <p className="text-center text-sm opacity-70">
          I&apos;m a preacher for modular monoliths with vertical slicing,
          Domain Driven Design, true CI/CD with Trunk Based Development and
          feature flags, fitness functions, procedural code and
          compartmentalizing volatile parts of our applications, rather than
          religiously de-coupling by functionality.
        </p>
        <p className="text-center text-sm opacity-70 pt-4">
          I&apos;m passionate about researching adaptable sofware architectures,
          enabling applications to gracefully evolve over time. I came to
          realize that in the ever-changing landscape of business needs and
          technological advances, having an adaptable architecture is crucial,
          providing the advantage of keeping the tempo of development rapid,
          without accumulating considerable technical debt. Yet, it remains
          common to not pay attention to plan and consistently maintain the
          architecture of our applications.
        </p>
        <p className="text-center text-sm opacity-70 pt-4">
          While I love geeking out over architectures, I like to think that
          I&apos;m also pragmatic, always keeping in mind that my goal as a
          software developer is to deliver a working product, not the blueprint
          of it.
        </p>
        <div className="mt-12 flex flex-col space-y-8 lg:space-y-4">
          <Experience
            title="Full Stack Developer"
            period="Apr 2021 - Present"
            employerName="Apiumhub"
            employerUrl="https://apiumhub.com/"
            desc="I'm currently employed as a full stack developer, working on a React front-, and an ASP.NET Core Web API backend."
          />
          <Experience
            title="Full Stack Developer"
            period="Sep 2018 - Apr 2021"
            employerName="Glownexus"
            employerUrl="https://www.glownexus.com/"
            desc="I was employed as a full stack developer, working on a React front-, and an ASP.NET Core Web API backend. I also participated in DevOps duties and general infrastructure development with Azure."
          />
          <Experience
            title=".NET Developer"
            period="May 2016 - Sep 2018"
            employerName="Atos Consulting"
            employerUrl="https://atos.net/en-hu/hungary/atos-consulting"
            desc="I was working on various, brown-field backends developed in the .NET ecosystem - mostly via ASP.NET with WCF."
          />
        </div>

        <div className="mt-12 inline-flex justify-center items-center w-full">
          <Button onClick={() => window.open("/DanielAgg_CV.pdf")}>
            Download CV
          </Button>
        </div>
      </div>
    </div>
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
              className="text-primary-light dark:text-primary-dark hover:underline decoration-wavy underline-offset-8 cursor-pointer"
            >
              {employerName}
            </a>
          </div>
          <div className="text-sm opacity-50 dark:opacity-70">{period}</div>
        </div>
        <div className="pt-4 text-sm">{desc}</div>
      </>
    </Card>
  );
};
