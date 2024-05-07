import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

import { AosInitializer } from "@/components/aosInitializer";

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
        <AosInitializer />
        {children}
      </body>
    </html>
  );
}
