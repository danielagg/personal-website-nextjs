"use client";

export const Success = () => {
  return (
    <div className="flex items-start lg:items-center space-x-2 text-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className="w-3/4">
        Thank you! Your message was successfully sent to me.
      </div>
    </div>
  );
};
