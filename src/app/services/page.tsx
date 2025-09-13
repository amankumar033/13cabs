'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PhoneIcon, UserIcon, CheckIcon, ArrowRightIcon, StarIcon, ShieldCheckIcon, ClockIcon, HeartIcon } from '@heroicons/react/24/outline';
import WhyChooseUs from "@/components/WhyChooseUs";
import PremiumServices from "@/components/PremiumServices";
import BookYourRideForm from "@/components/BookYourRideForm";
import companyConfig from "@/config/company";
export default function Services() {
  const router = useRouter();

  const handleBookOnline = () => {
    router.push('/booking');
  };

  return (
    <>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section with Background Image */}
        <div className="relative">
          {/* Background Image for Hero Section Only */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/people-group.png"
              alt="Luxury car background"
              fill
              className="object-cover sm:object-cover object-contain"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-6">
                <span className="text-white block">Professional</span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent block">Cab Services</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
                <span className="block sm:hidden">Comprehensive transportation solutions across Melbourne. From airport transfers to wheelchair accessible vehicles, we deliver excellence in every journey.</span>
                <span className="hidden sm:block">Discover our comprehensive range of transportation solutions. From airport transfers to wheelchair accessible vehicles, we deliver excellence in every journey across Melbourne.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 sm:pt-0">
                <Link href="/booking" className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 border border-yellow-300/30">
                  <span>Book Your Ride</span>
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <a 

href={`tel:${companyConfig.phoneHref}`}target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-yellow-400 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/15 hover:bg-white/25 flex items-center justify-center space-x-2 sm:space-x-3"
                >
                  <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12">
                <div className="group text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                    <ClockIcon className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <h3 className="text-xs sm:text-lg font-semibold text-white mb-1 sm:mb-2">24/7 Available</h3>
                  <p className="text-gray-300 text-sm font-medium hidden sm:block">Round the clock</p>
                </div>
                
                <div className="group text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                    <ShieldCheckIcon className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <h3 className="text-xs sm:text-lg font-semibold text-white mb-1 sm:mb-2">Licensed Drivers</h3>
                  <p className="text-gray-300 text-sm font-medium hidden sm:block">Certified pros</p>
                </div>
                
                <div className="group text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                    <Image
                      src="/wheelchair.png"
                      alt="Wheelchair accessible icon"
                      width={24}
                      height={24}
                      className="w-4 h-4 sm:w-6 sm:h-6"
                    />
                  </div>
                  <h3 className="text-xs sm:text-lg font-semibold text-white mb-1 sm:mb-2 leading-tight">
                    <span className="block sm:hidden">Wheelchair</span>
                    <span className="block sm:hidden">Accessible</span>
                    <span className="hidden sm:block">Wheelchair Accessible</span>
                  </h3>
                  <p className="text-gray-300 text-sm font-medium hidden sm:block">Inclusive transport</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Themed Background for Sections Below Hero */}
        <div className="bg-gradient-to-b from-black via-gray-900 to-black">
          {/* Service Categories Section */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white">Service </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Categories</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Choose from our specialized transportation categories designed for different needs and occasions
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                  <UserIcon className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Personal Transport</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  Individual and small group transportation for daily commutes, shopping trips, and personal appointments.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-300 flex flex-col items-center">
                  <li className="flex items-center justify-center w-full max-w-xs">
                    <CheckIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Door-to-door service
                  </li>
                  <li className="flex items-center justify-center w-full max-w-xs">
                    <CheckIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Flexible scheduling
                  </li>
                  <li className="flex items-center justify-center w-full max-w-xs">
                    <CheckIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Professional drivers
                  </li>
                </ul>
                <Link href="/booking" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 inline-block">
                  Learn More
                </Link>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/audience.png"
                    alt="Group transport icon"
                    width={40}
                    height={40}
                    className="w-10 h-10 filter brightness-0 contrast-200"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Group Transport</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  Spacious maxi cabs perfect for families, corporate groups, and special events with luggage capacity.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-300 flex flex-col items-center">
                  <li className="flex items-center justify-center w-full max-w-xs">
                    <CheckIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                    5-11 passengers
                  </li>
                  <li className="flex items-center justify-center w-full max-w-xs">
                    <CheckIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Extra luggage space
                  </li>
                  <li className="flex items-center justify-center w-full max-w-xs">
                    <CheckIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Event transportation
                  </li>
                </ul>
                <Link href="/maxi-cab" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 inline-block">
                  Learn More
                </Link>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                  <HeartIcon className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Specialized Transport</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  Wheelchair accessible vehicles and medical transport services for passengers with special needs.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-300 flex flex-col items-center">
                  <li className="flex items-center justify-center w-full max-w-xs">
                    <CheckIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Wheelchair ramps
                  </li>
                  <li className="flex items-center justify-center w-full max-w-xs">
                    <CheckIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Medical appointments
                  </li>
                  <li className="flex items-center justify-center w-full max-w-xs">
                    <CheckIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                    Trained drivers
                  </li>
                </ul>
                <Link href="/wheelchair-cab" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 inline-block">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Why Choose Our Services Section - Using Component */}
          <WhyChooseUs />

          {/* Premium Services Section - Using Component */}
          <PremiumServices 
            buttonOnClick={handleBookOnline}
          />

          {/* Call to Action Section with Booking Form */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Book Your Service?
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Experience premium transportation services with Maxi Cab Melbourne. Book now for reliable, safe, and comfortable rides.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Side - Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/40 rounded-full px-4 py-2 backdrop-blur-sm">
                    <StarIcon className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold text-sm">Trusted by 10,000+ Customers</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                    <span className="text-white block">Quick & Easy</span>
                    <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent block">Booking Process</span>
                  </h3>
                  
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Book your ride in minutes with our simple online form. Get instant confirmation and professional service every time.
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                      <CheckIcon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Instant Confirmation</h4>
                      <p className="text-gray-300 text-xs">Get booking details immediately</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                      <CheckIcon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">24/7 Support</h4>
                      <p className="text-gray-300 text-xs">Customer service always available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                      <CheckIcon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Fixed Pricing</h4>
                      <p className="text-gray-300 text-xs">No hidden fees or surprises</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                      <CheckIcon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Professional Drivers</h4>
                      <p className="text-gray-300 text-xs">Licensed and experienced</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Booking Form */}
              <div className="relative">
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-2xl blur-lg opacity-25"></div>
                
                <BookYourRideForm 
                  title="Quick Booking"
                  subtitle="Book your ride in minutes"
                  buttonText="Book Now"
                  showIcon={true}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
