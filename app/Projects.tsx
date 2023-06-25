"use client";

import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { GitHub } from "./components/Github";

export const Projects = () => {
  return (
    <div className="mt-40">
      <div className="text-3xl font-bold">Projects</div>

      <ul className="mt-8 space-y-8 lg:space-y-4">
        <Project
          key="koople"
          title="Koople Hobby Redesign"
          link="http://patata.danielagg.com/"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit unde aliquam impedit, quam earum reprehenderit consectetur, officia repellat odit esse veniam similique, deserunt cumque necessitatibus consequatur facilis placeat? Ut tenetur qui dolore perferendis, quia odio! Fuga voluptatem quos dignissimos."
        />

        <Project
          key="flashcard-game"
          title="Flashcard Language Learning Memory Game"
          link="http://flashcards.danielagg.com/"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit unde aliquam impedit, quam earum reprehenderit consectetur, officia repellat odit esse veniam similique, deserunt cumque necessitatibus consequatur facilis placeat? Ut tenetur qui dolore perferendis, quia odio! Fuga voluptatem quos dignissimos."
        />

        <Project
          key="payment-tracker"
          title="Payment Tracker App"
          link="http://fpayment-tracker.danielagg.com/"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit unde aliquam impedit, quam earum reprehenderit consectetur, officia repellat odit esse veniam similique, deserunt cumque necessitatibus consequatur facilis placeat? Ut tenetur qui dolore perferendis, quia odio! Fuga voluptatem quos dignissimos."
        />
      </ul>
    </div>
  );
};

const Project = ({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) => {
  return (
    <li>
      <Card>
        <>
          <div className="flex items-center justify-between space-x-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold"
            >
              {title}
            </a>
          </div>

          <div className="text-gray-light dark:text-gray-dark text-sm mt-2">
            {desc}
          </div>

          <div className="pt-4">
            <a className="text-sm cursor-pointer hover:underline decoration-wavy underline-offset-8">
              View source @ GitHub
            </a>
          </div>
        </>
      </Card>
    </li>
  );
};
