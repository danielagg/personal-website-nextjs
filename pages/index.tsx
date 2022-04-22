import type { NextPage } from "next";
import Head from "next/head";
import { About } from "../components/about.component";
import { Contact } from "../components/contact.component";
import { Intro } from "../components/intro.component";
import { Navbar } from "../components/navbar";

const Home: NextPage = () => {
  return (
    <div className="font-heebo text-gray-700 dark:text-slate-400 scroll-smooth">
      <Head>
        <title>Daniel Agg</title>
        <meta
          name="description"
          content="Personal site of Daniel Agg, Hungarian full stack developer."
        />
        <meta
          name="og:description"
          content="Personal site of Daniel Agg, Hungarian full stack developer."
        />
        <meta
          property="og:title"
          content="Add a Shopping Cart to Any Website in Minutes - Snipcart"
        />
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
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Home;
