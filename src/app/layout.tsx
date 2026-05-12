import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { processData } from "@/data/portfolio";
import { getFreshPortfolioData } from "@/data/server-data";
import portfolioData from "@/data/portfolio.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Senior Unity Developer Portfolio",
  description: "Portfolio of a Senior Unity Developer with 12+ years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch fresh data for the Navbar from disk (Server Component)
  const { profile } = getFreshPortfolioData(portfolioData, processData);

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased grid-bg min-h-screen flex flex-col`}
      >
        <Navbar profileData={profile} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
