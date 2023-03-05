import { Header } from "./Header";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <main className="w-full dark:bg-slate-900">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full px-8 lg:px-0 lg:w-3/4 mt-12 mb-24 lg:mb-40">
          <Header />
          <div className="border-b border-slate-700 w-full pt-12 mb-24" />
          {children}
        </div>
      </div>
    </main>
  );
}
