import { BlogPostListEntry } from "./BlogPostListEntry";
import { Header } from "./Header";

const getData = async () => {
  const res = await fetch(
    "https://dolphin-app-89fo4.ondigitalocean.app/api/posts?fields[0]=title&fields[1]=publishedAt&fields[2]=summary&fields[3]=is_apium_article&sort=id:desc"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch the blog posts");
  }

  return res.json();
};

const Index = async () => {
  const {
    data,
  }: {
    data: {
      id: number;
      attributes: {
        title: string;
        publishedAt: string;
        summary: string;
        is_apium_article: boolean;
      };
    }[];
  } = await getData();

  console.log(data);

  return (
    <main className="w-full dark:bg-slate-900">
      <div className="flex flex-col items-center justify-center">
        <div className="w-3/4 mt-12 mb-40">
          <Header />
          <div className="w-full flex flex-col items-start space-y-24 mt-12 border-t border-slate-700 pt-40 justify-center">
            {data.map((d) => {
              return (
                <BlogPostListEntry
                  key={d.id}
                  title={d.attributes.title}
                  publishedOn={d.attributes.publishedAt}
                  summary={d.attributes.summary}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
