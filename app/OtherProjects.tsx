"use client";

import { Button } from "./components/Button";

export const OtherProjects = () => {
  return (
    <div className="w-full px-8 lg:px-0 lg:w-1/2 space-y-4">
      <Button
        variant="outlined"
        text="Download my CV"
        onClick={() => window.open("/DanielAgg_CV.pdf")}
      />

      <Button
        variant="outlined"
        text="View my Blog"
        onClick={() => window.open("https://blog.danielagg.com/", "_self")}
      />
    </div>
  );
};
