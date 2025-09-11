import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Maxi Cab Melbourne",
  description: "Contact Maxi Cab Melbourne. We're available 24/7 for bookings, enquiries, and support.",
  openGraph: {
    title: "Contact - Maxi Cab Melbourne",
    description: "Contact Maxi Cab Melbourne. We're available 24/7 for bookings, enquiries, and support.",
    images: [
      {
        url: '/new-standard.png',
        width: 1200,
        height: 630,
        alt: 'Contact Maxi Cab Melbourne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact | Maxi Cab Melbourne",
    description: "We are available 24/7 for bookings, enquiries, and support.",
    images: ['/Driver.png'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}


