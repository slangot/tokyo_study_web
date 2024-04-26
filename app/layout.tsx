// components
import Nav from "../components/Nav";

// next
import { Inter } from "next/font/google";

// style
import "./globals.css";

// type
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tokyo Study Web",
  description: "A web app for studying Japanese",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
