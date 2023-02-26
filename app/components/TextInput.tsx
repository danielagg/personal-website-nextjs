"use client";

export const TextInput = ({
  id,
  label,
  value,
  setValue,
  placeHolder,
}: {
  id: string;
  label: string;
  value: string;
  setValue: (newValue: string) => void;
  placeHolder: string;
}) => {
  return (
    <form>
      <label htmlFor="fullname" className="block font-bold dark:text-slate-400">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        className="appearance-none text-gray-700 dark:text-slate-300 dark:bg-slate-900 p-2 rounded mt-1 w-full placeholder:text-sm dark:placeholder:text-slate-600 border border-slate-300 dark:border-none"
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeHolder}
      />
    </form>
  );
};
