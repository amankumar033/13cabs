import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Maxi Cab Melbourne | Group Transport 5-11 Passengers",
  description: "Professional Maxi Cab services in Melbourne. Spacious vehicles for 5-11 passengers. Airport transfers, group events, corporate transport.",
  openGraph: {
    title: "Maxi Cab Melbourne - Premium Transport Services ",
    description: "Maxi Cab services for groups, families, and events. Spacious vehicles with comfortable seating for 5-11 passengers.",
    images: [
      {
        url: '/large-cab.png',
        width: 1200,
        height: 630,
        alt: 'Maxi Cab Melbourne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Maxi Cab Melbourne | Group Transport",
    description: "Spacious vehicles for 5-11 passengers.",
    images: ['/large-maxi-cab.png'],
  },
};

export default function MaxiCabLayout({ children }: { children: React.ReactNode }) {
  return children;
}


