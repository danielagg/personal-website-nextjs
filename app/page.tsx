import { About } from "./About";
import { Contact } from "./Contact";
import { Intro } from "./Intro";
import { Navbar } from "./components/Navbar";
import { Projects } from "./Projects";
import { Button } from "./components/Button";
import { OtherProjects } from "./OtherProjects";

const Index = () => {
  return (
    <main className="w-full relative dark:bg-slate-900">
      <div className="z-10 flex flex-col items-center justify-center">
        <div className="w-3/4 mt-12 px-4">
          <Navbar />
          <Intro />
        </div>
        <About />
        <div className="w-full lg:w-2/3 space-y-16 lg:space-y-0 lg:space-x-32 px-4 py-12 lg:py-24 block lg:flex lg:items-start lg:justify-center border-t-2 border-gray-200 dark:border-slate-700">
          <Projects />
          <OtherProjects />
        </div>
        <Contact />
      </div>
    </main>
  );
};

export default Index;
