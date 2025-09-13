'use client';

import Link from 'next/link';
import {TruckIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { useMobileMenu } from '@/contexts/MobileMenuContext';
import Logo from './Logo';
import companyConfig from '@/config/company';
export default function Header() {
  const pathname = usePathname();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();
  
  const isActivePage = (page: string) => {
    if (page === 'home') return pathname === '/';
    return pathname === `/${page}`;
  };

  const navigationItems = [
    { href: '/', label: 'Home', page: 'home' },
    { href: '/services', label: 'Services', page: 'services' },
    { href: '/maxi-cab', label: 'Maxi Cab', page: 'maxi-cab' },
    { href: '/wheelchair-cab', label: 'Wheelchair Cab', page: 'wheelchair-cab' },
    { href: '/ndis', label: 'NDIS', page: 'ndis' },
    { href: '/contact', label: 'Contact', page: 'contact' },
  ];

  return (
    <header className="relative z-50 bg-black border-b border-white/40 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 lg:h-16">
          {/* Logo */}
          <Logo size="lg" showText={true} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navigationItems.map((item) => (
              <Link 
                key={item.page}
                href={item.href}
                prefetch
                className={`transition-colors duration-300 font-medium ${
                  isActivePage(item.page) 
                    ? 'text-yellow-400 font-semibold border-b-2 border-yellow-400 pb-1' 
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/booking" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-xl font-bold text-sm hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105 border border-yellow-300/30">
              Book Now
            </Link>
            <Link  href={`tel:${companyConfig.phoneHref}`} className="border-2 border-white/40 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/10 hover:bg-white/25">
             
              Call Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300 relative z-50"
            aria-label="Toggle mobile menu"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div className={`lg:hidden fixed inset-0 z-[9999] transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMobileMenu}
        />
        
        {/* Side Panel */}
        <div className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-black border-r border-white/20 transform transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-96'
        }`}>
          {/* Panel Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                <TruckIcon className="w-5 h-5 text-black" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Maxi Cab</h2>
                <p className="text-xs text-gray-300 font-medium">Melbourne</p>
              </div>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
              aria-label="Close mobile menu"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-6">
            <ul className="space-y-1">
              {navigationItems.map((item, index) => (
                <li key={item.page}>
                  <Link
                    href={item.href}
                    prefetch
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                      isActivePage(item.page)
                        ? 'bg-yellow-400/20 text-yellow-400 border-l-4 border-yellow-400'
                        : 'text-white hover:bg-white/10 hover:text-yellow-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {index < navigationItems.length - 1 && (
                    <div className="h-px bg-white/10 mx-4 my-2" />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Action Buttons */}
          <div className="p-6 border-t border-white/20 space-y-3">
            <Link 
              href="/booking" 
              onClick={closeMobileMenu}
              className="block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-bold text-center hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105 border border-yellow-300/30"
            >
              Book Now
            </Link>
            <Link 
                href={`tel:${companyConfig.phoneHref}`}
              onClick={closeMobileMenu}
              className="block w-full border-2 border-white/40 text-white px-6 py-3 rounded-xl font-bold text-center hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/10 hover:bg-white/25"
            >
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
