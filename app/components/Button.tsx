"use client";

export const Button = ({
  children,
  onClick,
}: {
  children: JSX.Element | string;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="lg:w-fit w-full flex justify-center items-center py-2 px-6 cursor-pointer border-2 rounded-full border-primary/10 bg-primary/5 hover:bg-primary/20  text-primary/80 hover:text-primary"
    >
      {children}
    </div>
  );
};
