import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script"

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
	<head>
		<Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16861373148"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16861373148');
          `}
        </Script>
	</head>
      <body
        className={`${EntFont.className} antialiased dark hidscrl`}
      >
        {children}
      </body>
    </html>
  );
}
