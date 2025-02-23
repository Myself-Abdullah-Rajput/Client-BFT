import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const EntFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fly Best Today - Cheapest Flight Rates Available",
  description: "Book flights on cheapest fare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${EntFont.className} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
