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
  icons: {
    icon: "/1.ico",
  },
  openGraph: {
    title: "Carlos Crespo | Software Engineer",
    description: "Computer Science graduate specializing in full-stack web development and machine learning.",
    url: "https://carloscrespo.info",
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
        <link rel="icon" href="src/app/favicon.ico" type="image/x-icon" />

        {/* 
          Inline script to prevent flash of wrong theme.
          Priority order:
          1. User's explicit choice (localStorage)
          2. System preference (prefers-color-scheme)
          This runs before React hydrates, so no flash occurs.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme');
                  
                  if (storedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (storedTheme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    // No stored preference - use system preference
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    if (prefersDark) {
                      document.documentElement.classList.add('dark');
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      {/* 
        Per dark mode guidelines: 
        - Body colors are set in @layer base in globals.css
        - data-gramm attributes prevent Grammarly hydration warnings
      */}
      <body 
        className={`${inter.variable} font-sans antialiased`}
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}