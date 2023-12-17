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
      className="bg-button-main hover:bg-button-hover text-primary rounded-full py-1 px-4 cursor-pointer"
    >
      {children}
    </div>
  );
};
