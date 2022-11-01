export const Projects = () => {
  const linkClass =
    "cursor-pointer text-green-500 dark:text-emerald-500 hover:underline";
  return (
    <div className="w-full px-6 lg:px-0 text-center lg:text-left">
      <div className="text-xl font-bold">Other Projects</div>

      <ul className="mt-4 list-disc list-inside space-y-2">
        <li>
          <a
            href="http://flashcards.danielagg.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Flashcard Language Learning Memory Game
          </a>
        </li>
        <li>
          <a
            href="https://payment-tracker.danielagg.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Payment Tracker
          </a>
        </li>
        <li>
          <a
            href="http://wheel-spinner.danielagg.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Wheel spinner
          </a>
        </li>
      </ul>
    </div>
  );
};
