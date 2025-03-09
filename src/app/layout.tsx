import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head"

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
	<Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16861373148"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16861373148');
          `}
        </script>
      </Head>
      <body
        className={`${EntFont.className} antialiased dark hidscrl`}
      >
        {children}
      </body>
    </html>
  );
}
