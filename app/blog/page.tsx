import { BlogPostListEntry } from "./BlogPostListEntry";

const getData = async () => {
  const res = await fetch(
    "https://dolphin-app-89fo4.ondigitalocean.app/api/posts?fields[0]=title&fields[1]=publishedAt&fields[2]=summary&fields[3]=is_apium_article&fields[4]=originally_published_on&sort=id:desc"
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
        originally_published_on?: string;
        summary: string;
        is_apium_article: boolean;
      };
    }[];
  } = await getData();

  return (
    <div className="w-full flex flex-col items-start space-y-24 mt-12 justify-center">
      {data.map((d) => {
        return (
          <BlogPostListEntry
            key={d.id}
            id={d.id}
            title={d.attributes.title}
            publishedOn={
              d.attributes.originally_published_on ?? d.attributes.publishedAt
            }
            summary={d.attributes.summary}
          />
        );
      })}
    </div>
  );
};

export default Index;
