import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

import { AosInitializer } from "@/components/aosInitializer";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Santuário de Cristo",
  description: "Igreja Crista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />

        <AosInitializer />
        {children}

        <Footer />
      </body>
    </html>
  );
}
