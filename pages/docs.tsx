import type { NextPage } from "next";

const Docs: NextPage = () => {
  return (
    <div className="font-heebo text-gray-700 scroll-smooth">
      <div onClick={() => window.open("/docs/1.pdf")}>1st</div>
      <div onClick={() => window.open("/docs/2.pdf")}>2nd</div>
      <div onClick={() => window.open("/docs/3.pdf")}>3rd</div>
      <div onClick={() => window.open("/docs/4.pdf")}>4th</div>
      <div onClick={() => window.open("/docs/5.jpg")}>5th</div>
      <div onClick={() => window.open("/docs/6.pdf")}>6th</div>
    </div>
  );
};

export default Docs;
