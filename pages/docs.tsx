import type { NextPage } from "next";

const Docs: NextPage = () => {
  return (
    <div className="font-heebo text-gray-700 scroll-smooth">
      <div onClick={() => window.open("/docs/1.pdf")}>1</div>
      <div onClick={() => window.open("/docs/2.pdf")}>2</div>
      <div onClick={() => window.open("/docs/3.pdf")}>3</div>
      <div onClick={() => window.open("/docs/4.pdf")}>4</div>
    </div>
  );
};

export default Docs;
