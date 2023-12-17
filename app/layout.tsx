import "../styles/globals.css";
import { Inconsolata } from "next/font/google";

const inter = Inconsolata({ subsets: ["latin"] });

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
      <body
        className={`w-full relative bg-background text-gray ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
