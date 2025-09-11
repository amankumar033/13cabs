import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services | Maxi Cab Melbourne",
  description: "Comprehensive transportation solutions across Melbourne: airport transfers, wheelchair accessible vehicles, group transport, and more.",
  openGraph: {
    title: "Professional Cab Services - Maxi Cab Melbourne",
    description: "Discover our comprehensive range of transportation solutions. From airport transfers to wheelchair accessible vehicles.",
    images: [
      {
        url: '/cab.png',
        width: 1200,
        height: 630,
        alt: 'Our Services - Maxi Cab Melbourne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Services | Maxi Cab Melbourne",
    description: "Discover our comprehensive range of transportation solutions across Melbourne.",
    images: ['/cab.png'],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}


