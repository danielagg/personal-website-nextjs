export const Card = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="bg-accent p-8 border-l-8 border-primary/50 rounded">
      {children}
    </div>
  );
};
