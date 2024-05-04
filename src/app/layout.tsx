import type { Metadata } from "next";
import '@fontsource/caveat-brush';
import "./globals.css";
import '@fontsource/atkinson-hyperlegible';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
  title: "Lunchbreak",
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
