export const FormattedDate = ({ dateAsString }: { dateAsString: string }) => {
  return (
    <>
      {new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(dateAsString))}
    </>
  );
};
