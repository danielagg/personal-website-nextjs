"use client";

import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { GitHub } from "./components/Github";

export const Projects = () => {
  return (
    <div className="mt-40">
      <div className="text-3xl font-bold text-primary-light dark:text-primary-dark text-center">
        Public Projects
      </div>

      <ul className="mt-8 space-y-8 lg:space-y-4">
        <Project
          key="koople"
          title="Koople UI"
          link="http://patata.danielagg.com/"
          desc="Koople is a feature-management tool, offering an easy way to use feature flags and remote configurations. This is a redesign of the dashboard of the app, written in NextJS with ShadCN UI, deployed to Vercel."
          githubLinks={{
            link: "https://github.com/danielagg/pata-with-shadcn",
          }}
        />

        <Project
          key="restaurant-backoffice"
          title="Restaurant Backoffice"
          link="#"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit unde aliquam impedit, quam earum reprehenderit consectetur, officia repellat odit esse veniam similique, deserunt cumque necessitatibus consequatur facilis placeat? Ut tenetur qui dolore perferendis, quia odio! Fuga voluptatem quos dignissimos."
          githubLinks={{
            link: "https://github.com/danielagg/restaurant-backoffice",
          }}
        />

        <Project
          key="personal-website"
          title="This Website"
          desc="This exact website: my personal website and blog. The tech powering the sites change frequently, as I use them as playgrounds to check out different frameworks and libraries. The current iteration for the blog is Astro, and this website is running on NextJS, with TypeScript and React, using TailwindCSS for styling."
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
      </ul>
    </div>
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
    <li>
      <Card>
        <>
          <div className="flex items-center justify-between space-x-4">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold hover:underline decoration-wavy underline-offset-8 text-primary-light dark:text-primary-dark"
              >
                {title}
              </a>
            ) : (
              <h2 className="text-xl font-bold text-primary-light dark:text-primary-dark">
                {title}
              </h2>
            )}
          </div>

          <div className="text-gray-light dark:text-gray-dark text-sm mt-2">
            {desc}
          </div>

          {Array.isArray(githubLinks) ? (
            <div className="flex items-center space-x-12 pt-4">
              {githubLinks.map((gh) => {
                return (
                  <a
                    key={gh.label}
                    className="block text-sm cursor-pointer hover:underline decoration-wavy underline-offset-8 text-primary-light dark:text-primary-dark"
                    href={gh.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {gh.label}
                  </a>
                );
              })}
            </div>
          ) : (
            <a
              className="block pt-4 text-sm cursor-pointer hover:underline decoration-wavy underline-offset-8 text-primary-light dark:text-primary-dark"
              href={githubLinks.link}
              target="_blank"
              rel="noreferrer"
            >
              View source on GitHub
            </a>
          )}
        </>
      </Card>
    </li>
  );
};
