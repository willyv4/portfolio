import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Nav";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "William Valadez",
  description:
    "A website about william valadez his work and skills inovling software development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-dominant-950">
      <body className={`${inter.className} bg-dominant-950`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
