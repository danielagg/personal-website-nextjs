import type { NextPage } from "next";

const Custom404: NextPage = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center dark:bg-slate-900 text-gray-700 dark:text-slate-400">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="text-8xl font-bold">That's a 404 :(</div>
        <div className="text-2xl">
          Sorry, the page you are looking for does not exist.
        </div>
      </div>
    </main>
  );
};

export default Custom404;
