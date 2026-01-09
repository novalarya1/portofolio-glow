import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noval Arya | Creative Developer",
  description: "Portfolio specializing in modern web interfaces.",
  // Tambahkan baris di bawah ini
  icons: {
    icon: "/logo.png", 
    apple: "/logo.png", // Opsional: Untuk perangkat Apple
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-charcoal text-white`}>
        {children}
      </body>
    </html>
  );
}