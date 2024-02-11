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
      className="lg:w-fit w-full flex justify-center items-center bg-button-main hover:bg-button-hover text-primary rounded-full py-2 px-6 cursor-pointer"
    >
      {children}
    </div>
  );
};
