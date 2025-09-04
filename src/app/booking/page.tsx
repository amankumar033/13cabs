'use client';

import Image from "next/image";
import Link from "next/link";
import { CheckIcon, StarIcon, ShieldCheckIcon, ClockIcon, TruckIcon } from '@heroicons/react/24/outline';
import BookYourRideForm from "@/components/BookYourRideForm";
import PremiumServices from "@/components/PremiumServices";

export default function Booking() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <div className="relative pt-6">
          {/* Background Image for Hero Section Only */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/car-bg.png"
              alt="Luxury car background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Hero Section */}
              <div className="space-y-5 text-center lg:text-left">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/40 rounded-full px-4 py-1 backdrop-blur-sm mx-auto lg:mx-0">
                    <StarIcon className="w-3 h-3 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold text-xs">Easy Online Booking</span>
                  </div>
                  
                  <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                    <span className="text-white block">Book Your</span>
                    <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent block">Ride Now</span>
                  </h2>
                  
                  <p className="text-base lg:text-lg text-gray-200 leading-relaxed max-w-lg font-medium mx-auto lg:mx-0">
                    <span className="block sm:hidden">Secure transportation with our easy online booking system. Choose from Maxi Cab and Wheelchair accessible vehicles.</span>
                    <span className="hidden sm:block">Secure your transportation with our easy online booking system. Choose from our range of services including Maxi Cab and Wheelchair accessible vehicles.</span>
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 pt-4">
                  <div className="group text-center p-3 sm:p-3 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                      <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">Instant Confirmation</h3>
                    <p className="text-gray-300 text-xs font-medium hidden sm:block">Get confirmed immediately</p>
                  </div>
                  
                  <div className="group text-center p-3 sm:p-3 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                      <ShieldCheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">Secure Booking</h3>
                    <p className="text-gray-300 text-xs font-medium hidden sm:block">Safe & protected</p>
                  </div>
                  
                  <div className="group text-center p-3 sm:p-3 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                      <TruckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">24/7 Available</h3>
                    <p className="text-gray-300 text-xs font-medium hidden sm:block">Book anytime</p>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="relative">
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-2xl blur-lg opacity-25"></div>
                
                <BookYourRideForm 
                  title="Book Your Ride"
                  subtitle="Fill in the details below"
                  buttonText="Confirm Booking"
                  showIcon={true}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white">Why Book </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">With Us</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Experience the difference with our professional transportation services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                  <ShieldCheckIcon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Safe & Secure</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All our drivers are licensed and vehicles are regularly inspected for your safety.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                  <ClockIcon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Service</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Round-the-clock availability for all your transportation needs.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                  <StarIcon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Professional</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Experienced, courteous drivers providing exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white">Our </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Choose the service that best fits your transportation needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Maxi Cab Card */}
              <Link href="/maxi-cab" className="group p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105 cursor-pointer block">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                  <Image
                    src="/audience.png"
                    alt="Group transport icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Maxi Cab</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-center mb-4">
                  Group transport for 5-11 passengers
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-300">
                    <CheckIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span>Airport transfers</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-300">
                    <CheckIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span>Group events</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-300">
                    <CheckIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span>Family travel</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-300">
                    <CheckIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span>Corporate transport</span>
                  </li>
                </ul>
              </Link>

              {/* Wheelchair Cab Card */}
              <Link href="/wheelchair-cab" className="group p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105 cursor-pointer block">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                  <Image
                    src="/wheelchair.png"
                    alt="Wheelchair accessible icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Wheelchair Cab</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-center mb-4">
                  Accessible transportation with ramps
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-300">
                    <CheckIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span>Medical appointments</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-300">
                    <CheckIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span>Therapy sessions</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-300">
                    <CheckIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span>Social activities</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-300">
                    <CheckIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span>Shopping trips</span>
                  </li>
                </ul>
              </Link>

              {/* NDIS Transport Card */}
              <Link href="/ndis" className="group p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105 cursor-pointer block">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                  <ShieldCheckIcon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">NDIS Transport</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-center mb-4">
                  NDIS approved transportation services
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-300">
                    <CheckIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span>NDIS compliant</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-300">
                    <CheckIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span>Medical transport</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-300">
                    <CheckIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span>Social support</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-300">
                    <CheckIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span>Flexible scheduling</span>
                  </li>
                </ul>
              </Link>
            </div>
          </div>
        </div>

        {/* Premium Services Section */}
        <PremiumServices 
          buttonOnClick={scrollToTop}
        />

        {/* Why Choose Maxi Cab Melbourne Section */}
        <div className="bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white">Why Choose </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Maxi Cab Melbourne</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Experience the difference with our premium transportation services
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CheckIcon className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-white font-medium text-sm">Professional, licensed drivers</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CheckIcon className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-white font-medium text-sm">Clean, well-maintained vehicles</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CheckIcon className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-white font-medium text-sm">Real-time GPS tracking</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CheckIcon className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-white font-medium text-sm">Competitive pricing with no hidden fees</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CheckIcon className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-white font-medium text-sm">24/7 customer support</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CheckIcon className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-white font-medium text-sm">Wheelchair accessible vehicles available</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CheckIcon className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-white font-medium text-sm">NDIS approved provider</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CheckIcon className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-white font-medium text-sm">Insurance and medical transport coverage</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
