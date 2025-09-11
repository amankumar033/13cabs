import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Book Your Ride | Maxi Cab Melbourne",
  description: "Secure your transportation with our easy online booking system. Choose Maxi Cab or Wheelchair accessible vehicles.",
  openGraph: {
    title: "Book Your Ride - Maxi Cab Melbourne",
    description: "Secure your transportation with our easy online booking system. Choose Maxi Cab or Wheelchair accessible vehicles.",
    images: [
      {
        url: '/new-standard.png',
        width: 1200,
        height: 630,
        alt: 'Book Your Ride - Maxi Cab Melbourne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Book Your Ride | Maxi Cab Melbourne",
    description: "Secure your transportation with our easy online booking system.",
    images: ['/car-bg.png'],
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}


