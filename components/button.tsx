import React from "react";

export const Button = ({
  variant,
  text,
  small,
  onClick,
  className,
  children,
}: {
  text?: string;
  variant: "filled-gray-hover-green" | "filled-gray-hover-white" | "outlined";
  small?: boolean;
  onClick?: () => void;
  className?: string;
  children?: any;
}) => {
  const getStyle = () => {
    switch (variant) {
      case "filled-gray-hover-green":
        return "bg-gray-700 text-white hover:bg-green-500 border-gray-700 hover:border-green-500";
      case "filled-gray-hover-white":
        return "bg-gray-700 text-white hover:bg-white border-gray-700 hover:border-white hover:text-green-500";
      case "outlined":
        return "text-gray-700 hover:text-green-500 border-gray-700 hover:border-green-500";
    }
  };
  return (
    <div
      onClick={onClick}
      className={`text-center ${className} ${
        small ? "border-2 px-12 py-2 text-sm" : "border-4 px-12 py-4 text-base"
      }  cursor-pointer uppercase font-bold  ${getStyle()}`}
    >
      {children && children}
      {text && text}
    </div>
  );
};
