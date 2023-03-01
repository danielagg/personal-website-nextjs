import { FormattedDate } from "../utilities/DateFormattes";

export const BlogPostListEntry = ({
  title,
  publishedOn,
  summary,
}: {
  title: string;
  publishedOn: string;
  summary: string;
}) => {
  return (
    <div className="dark:hover:text-emerald-500 hover:text-green-700 cursor-pointer">
      <div>
        <div className="uppercase tracking-widest text-3xl font-bold">
          {title}
        </div>
        <div className="text-sm">
          Published on <FormattedDate dateAsString={publishedOn} />.
        </div>
        <div className="mt-6">{summary}</div>
      </div>
    </div>
  );
};
