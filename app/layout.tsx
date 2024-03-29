import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/modules/Navigation/Navigation";
import "../styles/main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const navObjects = [
  {
    link: "/players",
    label: "Players",
    icon: "/img",
  },
  {
    link: "/teams",
    label: "Teams",
    icon: "/img",
  },
  {
    link: "/news",
    label: "News",
    icon: "/img",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navigation links={navObjects} />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
