"use client";

import { Card } from "./components/Card";

export const Projects = () => {
  return (
    <section className="mt-56">
      <h1 className="text-4xl font-bold text-gray text-center">
        Public Projects
      </h1>

      <div className="mt-12 grid grid-cols-2 gap-8">
        <Project
          key="koople-v2"
          title="Koople UI v2"
          link="http://patata.danielagg.com/"
          desc="Koople is a feature-management tool, offering an easy way to use feature flags and remote configurations. This is a redesign of the dashboard of the app, written in NextJS with ShadCN UI, deployed to Vercel."
          githubLinks={{
            link: "https://github.com/danielagg/pata-with-shadcn",
          }}
        />

        <Project
          key="material-allergen-manager"
          title="Material Allergen Manager"
          link="https://mam.danielagg.com/"
          desc="An ASP.NET Core project using Domain Driven Design, with a SvelteKit frontend, where materials and their allergen classifications can be managed."
          githubLinks={{
            link: "https://github.com/danielagg/material-allergen-management-app",
          }}
        />

        <Project
          key="language-card"
          title="Language Card Memory Game"
          link="https://flashcards-v2.danielagg.com/"
          desc="A language card memory game (EN-NL) in React, TypeScript, tRPC, Prisma and TailwindCSS, using Postgres for persistence."
          githubLinks={{
            link: "https://github.com/danielagg/language-cards-v3",
          }}
        />

        <Project
          key="quote-generator"
          title="HTMX/Go Serverless Quote Generator"
          link="https://htmx-quotes.danielagg.com/"
          desc="A small CRUD app to fetch/rate/manage quotes. I wanted to play around with HTMX to get a sense for an alternative way of building web apps."
          githubLinks={{
            link: "https://github.com/danielagg/htmx-playaround",
          }}
        />

        <Project
          key="personal-website"
          title="This Website"
          desc="This exact website - the tech powering my site and blog change frequently, as I use them as playgrounds to check out different frameworks and libraries. The current iteration for the blog is Astro, and this website is running on NextJS, with TypeScript and React, using TailwindCSS for styling."
          githubLinks={[
            {
              label: "View source of the website",
              link: "https://github.com/danielagg/personal-website-nextjs",
            },
            {
              label: "View source of the blog",
              link: "https://github.com/danielagg/personal-blog-astro",
            },
          ]}
        />
      </div>
    </section>
  );
};

const Project = ({
  title,
  desc,
  link,
  githubLinks,
}: {
  title: string;
  desc: string;
  link?: string;
  githubLinks:
    | {
        link: string;
      }
    | {
        label: string;
        link: string;
      }[];
}) => {
  return (
    <Card>
      <>
        <div className="flex items-center justify-between space-x-4">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold hover:underline decoration-wavy underline-offset-8 text-primary"
            >
              {title}
            </a>
          ) : (
            <h2 className="text-xl font-bold text-primary">{title}</h2>
          )}
        </div>

        <p className="text-gray text-sm mt-2">{desc}</p>

        {Array.isArray(githubLinks) ? (
          <section className="flex items-center space-x-12 pt-4">
            {githubLinks.map((gh) => {
              return (
                <a
                  key={gh.label}
                  className="block text-sm cursor-pointer hover:underline decoration-wavy underline-offset-8 text-primary"
                  href={gh.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {gh.label}
                </a>
              );
            })}
          </section>
        ) : (
          <a
            className="block pt-4 text-sm cursor-pointer hover:underline decoration-wavy underline-offset-8 text-primary"
            href={githubLinks.link}
            target="_blank"
            rel="noreferrer"
          >
            View source on GitHub
          </a>
        )}
      </>
    </Card>
  );
};
