import Link from "next/link";
import React from "react";

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
  const linkClass =
    "cursor-pointer text-green-500 dark:text-emerald-500 hover:underline flex items-center space-x-2";

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
                    <div className="h-1 w-1 rounded-full bg-green-500 dark:bg-emerald-500" />{" "}
                    <div>{d.attributes.title}</div>
                  </div>
                  <div className="text-xs pl-3">
                    Published on{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).format(new Date(d.attributes.publishedAt))}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
