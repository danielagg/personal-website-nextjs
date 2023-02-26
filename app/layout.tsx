import "../styles/globals.css";

export const metadata = {
  title: "Daniel Agg | Full Stack Developer",
  description: "Personal site of Daniel Agg, a full stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="w-full relative dark:bg-slate-900 text-gray-500">
        {children}
      </body>
    </html>
  );
}
