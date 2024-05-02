import type { Metadata } from "next";
import '@fontsource/caveat-brush';
import "./globals.css";
import '@fontsource/atkinson-hyperlegible';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Lunchtime",
  description: "Are you hungry yet?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navigation/>
      {children}
      <Footer/></body>
    </html>
  );
}
