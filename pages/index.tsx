import type { NextPage } from "next";
import Head from "next/head";
import { About } from "./about.component";
import { Contact } from "./contact.component";
import { Intro } from "./intro.component";
import { Navbar } from "./navbar";

const Home: NextPage = () => {
  return (
    <div className="font-heebo text-gray-700">
      <Head>
        <title>Daniel Agg</title>
        <meta
          name="description"
          content="Personal site of Daniel Agg, Hungarian full stack developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full relative">
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
