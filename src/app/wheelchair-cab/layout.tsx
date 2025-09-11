import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Wheelchair Cab | Accessible Transport Melbourne",
  description: "Safe, accessible wheelchair cab services in Melbourne. Trained drivers and fitted vans for comfortable travel.",
  openGraph: {
    title: "Wheelchair Cab - Accessible Transport in Melbourne",
    description: "Professional wheelchair accessible transportation services in Melbourne. Safe, comfortable, and reliable rides for wheelchair users.",
    images: [
      {
        url: '/wheelchair-cab.png',
        width: 1200,
        height: 630,
        alt: 'Wheelchair Cab Melbourne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wheelchair Cab | Accessible Transport",
    description: "Safe, accessible wheelchair cab services in Melbourne.",
    images: ['/wheelchair-cab.png'],
  },
};

export default function WheelchairCabLayout({ children }: { children: React.ReactNode }) {
  return children;
}


