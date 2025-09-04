import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButtonWrapper from "@/components/FloatingActionButtonWrapper";
import { MobileMenuProvider } from "@/contexts/MobileMenuContext";
import { companyConfig } from "@/config/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: companyConfig.seo.title,
  description: companyConfig.seo.description,
  keywords: companyConfig.seo.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <MobileMenuProvider>
          <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Header />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
            <FloatingActionButtonWrapper />
          </div>
        </MobileMenuProvider>
      </body>
    </html>
  );
}
