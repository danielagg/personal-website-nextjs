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
      className="bg-button-light dark:bg-button-dark rounded-full py-1 px-4 cursor-pointer hover:bg-button-light-hover hover:dark:bg-button-dark-hover text-[#e2e8f0] dark:text-primary-dark"
    >
      {children}
    </div>
  );
};
