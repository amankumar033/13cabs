import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { companyConfig } from '@/config/company';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black/70 backdrop-blur-2xl border-t border-white/40 mt-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Mobile Layout */}
        <div className="block md:hidden space-y-6">
          {/* Company Info - First */}
          <div className="space-y-3">
            <Logo size="md" showText={true} />
            <p className="text-gray-200 text-sm leading-relaxed font-medium">
              {companyConfig.fullDescription}
            </p>
          </div>
          
          {/* Quick Links and Services in one row - Second */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white">Quick Links</h4>
              <ul className="space-y-1 text-sm">
                <li><Link href="/" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">Home</Link></li>
                <li><Link href="/services" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">Services</Link></li>
                <li><Link href="/maxi-cab" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">Maxi Cab</Link></li>
                <li><Link href="/contact" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">Contact</Link></li>
                <li><Link href="/ndis" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">NDIS</Link></li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white">Our Services</h4>
              <ul className="space-y-1 text-sm">
                <li><Link href="/maxi-cab" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">Maxi Cab Service</Link></li>
                <li><Link href="/wheelchair-cab" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">Wheelchair Cab</Link></li>
                <li><Link href="/ndis" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">NDIS Transport</Link></li>
                <li><Link href="/airport-transfer" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">Airport Transfers</Link></li>
                <li><Link href="/medical-transport" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">Medical Transport</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Contact Info - Third */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-200">
              <a href={`https://wa.me/${companyConfig.phone.replace('+', '')}?text=${encodeURIComponent(companyConfig.whatsapp.defaultMessage)}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-yellow-400 transition-colors duration-300 cursor-pointer font-medium">
                <PhoneIcon className="w-4 h-4 text-yellow-400" />
                <span>{companyConfig.phone}</span>
              </a>
              <a href={`mailto:${companyConfig.email}?subject=${encodeURIComponent(companyConfig.emailTemplate.subject)}&body=${encodeURIComponent(companyConfig.emailTemplate.body)}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-yellow-400 transition-colors duration-300 cursor-pointer font-medium">
                <EnvelopeIcon className="w-4 h-4 text-yellow-400" />
                <span>{companyConfig.email}</span>
              </a>
              <div className="flex items-center space-x-3 hover:text-yellow-400 transition-colors duration-300 cursor-pointer font-medium">
                <MapPinIcon className="w-4 h-4 text-yellow-400" />
                <span>{companyConfig.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <Logo size="lg" showText={true} />
            <p className="text-gray-200 text-sm leading-relaxed font-medium">
              {companyConfig.fullDescription}
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white border-b border-yellow-400/30 pb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">Home</Link></li>
              <li><Link href="/services" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">Services</Link></li>
              <li><Link href="/maxi-cab" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">Maxi Cab</Link></li>
              <li><Link href="/contact" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">Contact</Link></li>
              <li><Link href="/ndis" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">NDIS</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white border-b border-yellow-400/30 pb-2">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/maxi-cab" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">Maxi Cab Service</Link></li>
              <li><Link href="/wheelchair-cab" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">Wheelchair Cab</Link></li>
              <li><Link href="/ndis" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">NDIS Transport</Link></li>
              <li><Link href="/airport-transfer" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">Airport Transfers</Link></li>
              <li><Link href="/medical-transport" className="text-gray-200 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium">Medical Transport</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white border-b border-yellow-400/30 pb-2">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-200">
              <a href={`https://wa.me/${companyConfig.phone.replace('+', '')}?text=${encodeURIComponent(companyConfig.whatsapp.defaultMessage)}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-yellow-400 transition-colors duration-300 cursor-pointer font-medium group">
                <PhoneIcon className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                <span>{companyConfig.phone}</span>
              </a>
              <a href={`mailto:${companyConfig.email}?subject=${encodeURIComponent(companyConfig.emailTemplate.subject)}&body=${encodeURIComponent(companyConfig.emailTemplate.body)}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-yellow-400 transition-colors duration-300 cursor-pointer font-medium group">
                <EnvelopeIcon className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                <span>{companyConfig.email}</span>
              </a>
              <div className="flex items-center space-x-3 hover:text-yellow-400 transition-colors duration-300 cursor-pointer font-medium group">
                <MapPinIcon className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                <span>{companyConfig.address}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/40 mt-8 pt-6 text-center">
          <p className="text-gray-300 text-sm font-medium">
            © 2024 {companyConfig.name}. All rights reserved. | {companyConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
