import { About } from "./About";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

const Index = () => {
  return (
    <main className="w-full relative text-gray-light dark:text-gray-dark">
      <div className="z-10 flex flex-col items-center justify-center">
        <div className="w-3/4 lg:w-1/2 px-4">
          <Intro />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default Index;
