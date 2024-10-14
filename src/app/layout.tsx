import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const manropeRegular = localFont({
  src: "./fonts/Manrope-Medium.otf",
  variable: "--font-ManropeRegular",
  weight: "100 900",
});
const manropeBold = localFont({
  src: "./fonts/Manrope-SemiBold.otf",
  variable: "--font-manropeBold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "X - What's happening now",
  description: "The best social media for anything interactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manropeBold.variable} ${manropeRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
