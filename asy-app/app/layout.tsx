import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";

const bimFont = localFont({
  src: "../public/Rodchenko.ttf",
  variable: "--font-bim",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Домострой - Российские товары для дома",
  description: "Платформа импортозамещения в строительстве и отделке. Лучшие российские производители мебели и материалов в одном месте.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${bimFont.variable} antialiased bg-[var(--background)]`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
