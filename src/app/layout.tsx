import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phantom Stack — AI-Powered Solutions",
  description:
    "Phantom Stack builds intelligent tools and helps businesses embrace AI. Custom AI development, consulting, and readiness assessments.",
  keywords: [
    "AI consulting",
    "AI development",
    "machine learning",
    "automation",
    "Phantom Stack",
  ],
  openGraph: {
    title: "Phantom Stack — AI-Powered Solutions",
    description:
      "We build intelligent tools and help businesses embrace AI.",
    url: "https://phantomstack.dev",
    siteName: "Phantom Stack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
