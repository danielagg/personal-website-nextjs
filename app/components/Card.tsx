export const Card = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="rounded bg-accent-light dark:bg-accent-dark p-5">
      {children}
    </div>
  );
};
