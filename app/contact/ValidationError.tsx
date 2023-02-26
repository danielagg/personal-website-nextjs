export const ValidationError = () => {
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
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <div className="w-3/4">
        Please make sure you have entered your name, email and message, before
        trying to press &apos;Send&apos;.
      </div>
    </div>
  );
};
