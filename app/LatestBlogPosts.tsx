import Link from "next/link";
import { FormattedDate } from "./utilities/DateFormattes";

const getData = async () => {
  const res = await fetch(
    "https://dolphin-app-89fo4.ondigitalocean.app/api/posts?fields[0]=title&fields[1]=publishedAt&sort=id:desc&pagination[page]=1&pagination[pageSize]=3"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch the latest 3 posts");
  }

  return res.json();
};

export const LatestBlogPosts = async () => {
  const baseLinkClass =
    "cursor-pointer text-green-500 dark:text-emerald-500 hover:underline";
  const linkClass = `${baseLinkClass} flex items-center space-x-2`;

  const {
    data,
  }: {
    data: { id: number; attributes: { title: string; publishedAt: string } }[];
  } = await getData();

  return (
    <div className="w-full px-6 lg:px-0 text-center lg:text-left">
      <div className="text-xl font-bold">Latest Blog Posts</div>

      <ul className="mt-4 list-inside space-y-4">
        {data.map((d) => {
          return (
            <li key={d.id}>
              <Link href={`/blog/posts/${d.id}`}>
                <div>
                  <div className={linkClass}>
                    <div className="h-1 w-1 rounded-full bg-green-500 dark:bg-emerald-500 hidden lg:block" />
                    <span className="block lg:hidden"> </span>
                    <div>{d.attributes.title}</div>
                  </div>
                  <div className="text-xs pl-3">
                    Published on{" "}
                    <FormattedDate dateAsString={d.attributes.publishedAt} />.
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 border-t border-slate-700 p-2 flex justify-center lg:justify-start">
        <Link href="/blog">
          <div className="text-sm mt-4 flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            <div className={baseLinkClass}>View all posts</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
