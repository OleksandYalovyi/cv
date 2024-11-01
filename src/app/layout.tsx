import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";
import Header from "@/components/Header";

import "./globals.css";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});
const nunitoSans = localFont({
  src: "../public/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf",
  variable: "--font-nunito-sans",
  // weight: "400",
});
const nunitoSansItalic = localFont({
  src: "../public/fonts/NunitoSans-Italic-VariableFont_YTLC,opsz,wdth,wght.ttf",
  variable: "--font-nunito-sans-italic",
});

export const metadata: Metadata = {
  title: "Oleksandr Yalovyi",
  description: "CV of Oleksandr Yalovyi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${nunitoSansItalic.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <Head>
        <title>Hello</title>
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
