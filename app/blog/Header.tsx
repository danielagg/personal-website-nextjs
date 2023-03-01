import Link from "next/link";
import { Navbar } from "../components/Navbar";

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-full">
        <Link href="/">
          <div className="text-xs flex items-center space-x-2 text-green-700 dark:text-emerald-500 cursor-pointer hover:text-green-600 dark:hover:text-emerald-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            <div>Back to the main page</div>
          </div>
        </Link>
        <div className="">
          I&apos;m an expert on nothing. This blog captures my journey as I
          learn and build things.
        </div>
      </div>
      <div className="w-32">
        <Navbar onlyLinkedInAndTwitter />
      </div>
    </div>
  );
};
