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
  keywords: ["Software Engineer", "Web Developer", "React", "Python", "Machine Learning", "Full Stack Developer"],
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
      <head>
        {/* Inline script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}