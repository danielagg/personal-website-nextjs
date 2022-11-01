import type { NextPage } from "next";
import Head from "next/head";
import { About } from "../components/about";
import { Blog } from "../components/blog";
import { Contact } from "../components/contact";
import { Intro } from "../components/intro";
import { Navbar } from "../components/navbar";
import { Projects } from "../components/projects";

const Home: NextPage = () => {
  return (
    <div className="font-heebo text-gray-700 dark:text-slate-400 scroll-smooth">
      <Head>
        <title>Daniel Agg | Full Stack Developer</title>
        <meta
          name="description"
          content="Personal site of Daniel Agg, Hungarian full stack developer."
        />
        <meta
          name="og:description"
          content="Personal site of Daniel Agg, Hungarian full stack developer."
        />
        <meta property="og:title" content="Daniel Agg | Full Stack Developer" />
        <meta property="og:url" content="https://www.danielagg.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full relative dark:bg-slate-900">
        <div className="z-10 flex flex-col items-center justify-center">
          <div className="w-3/4 mt-12 px-4">
            <Navbar />
            <Intro />
          </div>
          <About />
          <div className="w-full lg:w-2/3 space-y-16 lg:space-y-0 lg:space-x-32 px-4 py-12 lg:py-24 block lg:flex lg:items-center lg:justify-center border-t-2 border-gray-200 dark:border-slate-700">
            <Projects />
            <Blog />
          </div>
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Home;
