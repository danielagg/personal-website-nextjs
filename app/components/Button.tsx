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
      className="bg-button-light dark:bg-button-dark rounded-full py-1 px-4 cursor-pointer hover:bg-button-light-hover hover:dark:bg-button-dark-hover text-primary-light dark:text-primary-dark"
    >
      {children}
    </div>
  );
};

// export const Button = ({
//   variant,
//   text,
//   small,
//   onClick,
//   className,
//   children,
// }: {
//   text?: string;
//   variant: "filled-gray-hover-green" | "filled-gray-hover-white" | "outlined";
//   small?: boolean;
//   onClick?: () => void;
//   className?: string;
//   children?: any;
// }) => {
//   const getStyle = () => {
//     switch (variant) {
//       case "filled-gray-hover-green":
//         return "bg-gray-700 dark:bg-slate-500 text-white dark:text-slate-900 hover:bg-green-600 border-gray-700 dark:border-slate-500 hover:border-green-600";
//       case "filled-gray-hover-white":
//         return "bg-gray-700 dark:bg-slate-600 text-white dark:text-slate-900 hover:bg-white hover:dark:bg-slate-500 border-gray-700 dark:border-slate-600 hover:border-white hover:dark:border-slate-500 hover:text-green-500 hover:text-emerald-400";
//       case "outlined":
//         return "text-gray-700 dark:text-slate-500 hover:text-green-600 border-gray-700 dark:border-slate-500 hover:border-green-600";
//     }
//   };
//   return (
//     <div
//       onClick={onClick}
//       className={`text-center ${className} ${
//         small ? "border-2 px-12 py-2 text-sm" : "border-4 px-12 py-4 text-base"
//       }  cursor-pointer uppercase font-bold  ${getStyle()}`}
//     >
//       {children && children}
//       {text && text}
//     </div>
//   );
// };
