import { About } from "./About";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

const Index = () => {
  return (
    <main className="w-full relative text-gray">
      <div className="z-10 flex flex-col items-center justify-center">
        <div className="w-3/4 lg:w-1/2 lg:px-4 pt-12 lg:pt-0">
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
