import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NDIS Transport | Maxi Cab Melbourne",
  description: "NDIS approved transportation services in Melbourne. Accessible vehicles and trained drivers for safe, reliable transport.",
  openGraph: {
    title: "NDIS Transport - Maxi Cab Melbourne",
    description: "NDIS approved transportation services for participants. Professional drivers, wheelchair accessible vehicles, and comprehensive support.",
    images: [
      {
        url: '/ndis.png',
        width: 1200,
        height: 630,
        alt: 'NDIS Transport - Maxi Cab Melbourne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NDIS Transport | Maxi Cab Melbourne",
    description: "NDIS approved transportation services in Melbourne.",
    images: ['/ndis.png'],
  },
};

export default function NdisLayout({ children }: { children: React.ReactNode }) {
  return children;
}


