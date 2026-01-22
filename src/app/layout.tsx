import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Carlos Crespo | Software Engineer",
  description: "Computer Science graduate specializing in full-stack web development, machine learning, and building production-ready applications.",
  keywords: ["Software Engineer", "Web Developer", "React", "Python", "Machine Learning"],
  authors: [{ name: "Carlos Crespo" }],
  openGraph: {
    title: "Carlos Crespo | Software Engineer",
    description: "Computer Science graduate specializing in full-stack web development and machine learning.",
    url: "https://carloscrespo.dev",
    siteName: "Carlos Crespo Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Crespo | Software Engineer",
    description: "Computer Science graduate specializing in full-stack web development and machine learning.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Add suppressHydrationWarning here */}
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}