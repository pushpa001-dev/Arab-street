import type { Metadata } from "next";
import { Geist, Geist_Mono ,Overpass } from "next/font/google";
import "./globals.css";
import ScrollContext from "@/components/ScrollContext";
import Footer from "@/components/Footer";
import 'leaflet/dist/leaflet.css';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arab street",
  description: "Arab street restaurent web page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${overpass.variable} antialiased`}
      >
         <ScrollContext>
         
        {children}
        <Footer/>
        </ScrollContext>
      </body>
    </html>
  );
}
