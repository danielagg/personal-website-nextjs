import type { NextPage } from "next";

const Docs: NextPage = () => {
  return (
    <div className="font-heebo text-gray-700 scroll-smooth">
      <div onClick={() => window.open("/docs/boarding.pdf")}>1st</div>
    </div>
  );
};

export default Docs;
