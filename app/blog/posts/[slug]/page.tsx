import { FormattedDate } from "../../../utilities/DateFormattes";

const getData = async (postId: number) => {
  const res = await fetch(
    `https://dolphin-app-89fo4.ondigitalocean.app/api/posts/${postId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch the blog posts");
  }

  return res.json();
};

const BlogPost = async ({ params }: { params: { slug: number } }) => {
  const { slug: postId } = params;
  const {
    data,
  }: {
    data: {
      attributes: {
        title: string;
        content: string;
        publishedAt: string;
        originally_published_on?: string;
      };
    };
  } = await getData(postId);

  console.log(data);

  return (
    <div>
      <div className="uppercase tracking-widest text-4xl font-bold">
        {data.attributes.title}
      </div>
      <div>
        Published on{" "}
        <FormattedDate
          dateAsString={
            data.attributes.originally_published_on ??
            data.attributes.publishedAt
          }
        />
        .
      </div>
      <div className="mt-6">{data.attributes.content}</div>
    </div>
  );
};

export default BlogPost;
