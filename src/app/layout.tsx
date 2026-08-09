import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nova Restro — One system for the whole restaurant",
  description:
    "A guest sits down, scans the code on the table, and orders from their own phone. The kitchen sees it in three seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {/*
          SmoothScrollProvider is a client component that renders null.
          Placing it here ensures it mounts once at the root, initialises
          Lenis before any content paints, and is cleaned up on unmount.
          Server components (page.tsx, etc.) are unaffected.
        */}
        <SmoothScrollProvider />
        {children}
      </body>
    </html>
  );
}
