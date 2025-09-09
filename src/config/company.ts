export const companyConfig = {
  name: "Maxi Cab Melbourne",
  tagline: "Premium Transportation",
  shortName: "Maxi Cab",
  description: "Melbourne's Premium Choice",
  fullDescription: "Professional Maxi Cab and Wheelchair accessible transportation services. Safe, reliable, and comfortable rides for all your travel needs.",
  
  // Logo Configuration
  logo: {
    icon: "TruckIcon", // Available icons: TruckIcon, MapPinIcon, StarIcon, HeartIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon, GlobeAltIcon, CogIcon, HomeIcon, UserIcon, PhoneIcon, EnvelopeIcon
    image:"/maxi-logo-removebg-preview.png",
    useIcon: false, // Set to false if you want to use an image instead of icon
    alt: "Maxi Cab Melbourne Logo"
  },
  
  // Contact Information
  phone: "+61415555576",
  email: "maxicab@gmail.com",
  address: "8 Parish St. Tarneit VIC 3029",
  
  // SEO Metadata
  seo: {
    title: "Maxi Cab Melbourne - Premium Cab Services",
    description: "Professional Maxi Cab and Wheelchair accessible transportation services in Melbourne. Safe, reliable, and comfortable rides available 24/7.",
    keywords: "Cab, maxi Cab, wheelchair Cab, melbourne, transportation, ndis transport"
  },
  
  // WhatsApp Messages
  whatsapp: {
    defaultMessage: "Hi, I'd like to book a ride with Maxi Cab. Please let me know about availability and pricing.",
    maxiCabMessage: "Hi, I'd like to book a Maxi Cab ride. Please let me know about availability and pricing.",
    ndisMessage: "Hi, I'd like to book NDIS Transport services. Please let me know about availability and pricing.",
    wheelchairMessage: "Hi, I'd like to book a Wheelchair Cab ride. Please let me know about availability and pricing.",
    assistanceMessage: "Hi, I just submitted a booking and need immediate assistance."
  },
  
  // Email Templates
  emailTemplate: {
    subject: "Booking Inquiry - Maxi Cab Services",
    body: "Hi,\n\nI would like to inquire about booking a ride with Maxi Cab. Please let me know about availability and pricing.\n\nThank you!"
  }
};

export default companyConfig;
