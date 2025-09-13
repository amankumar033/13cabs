import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RouteProgress from "@/components/RouteProgress";
import { MobileMenuProvider } from "@/contexts/MobileMenuContext";
import { companyConfig } from "@/config/company";
import { Toaster } from "react-hot-toast";
import FloatingActionButton from "@/components/FloatingActionButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://maxicab24.com'),
  title: companyConfig.seo.title,
  description: companyConfig.seo.description,
  keywords: companyConfig.seo.keywords,
  authors: [{ name: "Maxi Cab Melbourne" }],
  creator: "Maxi Cab Melbourne",
  publisher: "Maxi Cab Melbourne",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://maxicab24.com',
    siteName: 'Maxi Cab Melbourne',
    title: companyConfig.seo.title,
    description: companyConfig.seo.description,
    images: [
      {
        url: '/new-standard.png',
        width: 1200,
        height: 630,
        alt: 'Maxi Cab Melbourne - Premium Transportation Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: companyConfig.seo.title,
    description: companyConfig.seo.description,
    images: ['/new-standard.png'],
  },
  alternates: {
    canonical: 'https://maxicab24.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Maxi Cab Melbourne",
    "alternateName": ["Maxi Taxi Melbourne", "MaxiCab Melbourne", "MaxiTaxi Melbourne", "Maxi Cab 24", "Maxi 24", "Maxi Taxi 24", "MaxiCab 24", "MaxiTaxi 24"],
    "description": "Professional Maxi Cab, Maxi Taxi & Wheelchair accessible transportation services in Melbourne. Safe, reliable rides for groups, airport transfers, NDIS transport.",
    "url": "https://maxicab24.com",
    "telephone": "+61415555576",
    "email": "maxicab@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8 Parish St",
      "addressLocality": "Tarneit",
      "addressRegion": "VIC",
      "postalCode": "3029",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-37.8136",
      "longitude": "144.9631"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-37.8136",
        "longitude": "144.9631"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Transportation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Maxi Cab Service",
            "description": "Group transportation for 5-11 passengers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wheelchair Cab Service",
            "description": "Accessible transportation with ramps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "NDIS Transport",
            "description": "NDIS approved transportation services"
          }
        }
      ]
    },
    "sameAs": [
      "https://wa.me/61415555576"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <MobileMenuProvider>
          <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <RouteProgress />
            <Header />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
         <FloatingActionButton/>
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#1f2937',
                  color: '#fff',
                  border: '1px solid #374151',
                },
                success: {
                  iconTheme: {
                    primary: '#fbbf24',
                    secondary: '#000',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#ef4444',
                    secondary: '#fff',
                  },
                },
              }}
            />
          </div>
        </MobileMenuProvider>
      </body>
    </html>
  );
}
