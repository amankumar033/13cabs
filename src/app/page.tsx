'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRightIcon, StarIcon, CheckIcon, ClockIcon as ClockIconSolid, UserIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

import PremiumServices from "@/components/PremiumServices";
import BookYourRideForm from "@/components/BookYourRideForm";

export default function Home() {
  const router = useRouter();

  const handleBookOnline = () => {
    router.push('/booking');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Header */}

                   {/* Main Content */}
             <main className="relative z-10">
               {/* Hero Section with Background Image */}
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
              <div className="space-y-6 sm:space-y-5 text-center lg:text-left">
              <div className="space-y-6 sm:space-y-4">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/40 rounded-full px-4 py-1 backdrop-blur-sm mx-auto lg:mx-0">
                  <StarIcon className="w-3 h-3 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold text-xs">Trusted by 10,000+ Customers</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="text-white block">Premium Cab</span>
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent block">Services</span>
                  <span className="text-white block text-2xl lg:text-3xl mt-3 sm:mt-2">Available 24/7</span>
                </h2>
                
                <p className="text-base text-gray-200 leading-relaxed max-w-lg font-medium mx-auto lg:mx-0">
                  <span className="block sm:hidden">Professional Maxi Cab and Wheelchair accessible services across Melbourne.</span>
                  <span className="hidden sm:block">Experience luxury transportation with our professional Maxi Cab and Wheelchair accessible services. Safe, reliable, and comfortable rides across Melbourne.</span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 sm:pt-0">
                <Link href="/booking" className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-bold text-base hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105 flex items-center justify-center space-x-2 border border-yellow-300/30">
                  <span>Book Your Ride</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link href="/services" className="group border-2 border-white/40 text-white px-6 py-3 rounded-xl font-bold text-base hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 backdrop-blur-sm bg-white/15 hover:bg-white/25 flex items-center justify-center space-x-2">
                  <TruckIcon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span>View Services</span>
                </Link>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-3 sm:gap-3 pt-6 sm:pt-4">
                <div className="group text-center p-3 sm:p-3 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-2 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                    <ClockIconSolid className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">24/7 Available</h3>
                  <p className="text-gray-300 text-xs font-medium hidden sm:block">Round the clock</p>
                </div>
                
                <div className="group text-center p-3 sm:p-3 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-2 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                    <ShieldCheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">Licensed Drivers</h3>
                  <p className="text-gray-300 text-xs font-medium hidden sm:block">Certified pros</p>
                </div>
                
                <div className="group text-center p-3 sm:p-3 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-2 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                    <Image
                      src="/wheelchair.png"
                      alt="Wheelchair accessible icon"
                      width={20}
                      height={20}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">Wheelchair Accessible</h3>
                  <p className="text-gray-300 text-xs font-medium hidden sm:block">Inclusive transport</p>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="relative ">
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

        {/* Themed Background for Sections Below Hero */}
        <div className="bg-gradient-to-b from-black via-gray-900 to-black">
          {/* Statistics Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                <UserIcon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">10,000+</h3>
              <p className="text-gray-300 text-sm font-medium">Happy Customers</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                <ShieldCheckIcon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
              <p className="text-gray-300 text-sm font-medium">Years Experience</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                <ClockIconSolid className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">365 Days</h3>
              <p className="text-gray-300 text-sm font-medium">Available 24/7</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                <StarIcon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">5 Stars</h3>
              <p className="text-gray-300 text-sm font-medium">Safety Rating</p>
            </div>
          </div>
        </div>

       

        {/* Our Fleet Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Fleet</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Choose from our specialized transportation services designed to meet all your travel needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl overflow-hidden hover:bg-white/25 transition-all duration-300">
           
              <Image src="/cab.png" alt="" width={1600} height={800} className="w-full h-80 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Maxi Cab Service</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Spacious vehicles perfect for groups, families, and luggage. Comfortable seating for 5-11 passengers.
                </p>
                <ul className="space-y-2 mb-6">
                  {['Seats 5-11 passengers', 'Extra luggage space', 'Airport transfers', 'Group events & tours'].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      {feature}
          </li>
                  ))}
                </ul>
                <Link href="/maxi-cab" className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Book Now →</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl overflow-hidden hover:bg-white/25 transition-all duration-300">
              <Image src="/wheelchair-cab.png" alt="" width={1600} height={800} className="w-full h-80 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Wheelchair Cab</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Specially designed vehicles with wheelchair accessibility features for safe and comfortable transportation.
                </p>
                <ul className="space-y-2 mb-6">
                  {['Wheelchair accessible ramps', 'Secure wheelchair restraints', 'Medical appointment transport', 'Trained accessibility drivers'].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      {feature}
          </li>
                  ))}
                </ul>
                <Link href="/wheelchair-cab" className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Book Now →</span>
                </Link>
              </div>
            </div>




          </div>
        </div>
 {/* Why Choose Us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              <span className="text-white block">Why Choose</span>
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent block">Maxi Cab Melbourne</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Experience the difference with our premium transportation services
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
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
                <ClockIconSolid className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Service</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Round-the-clock availability for all your transportation needs.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                <Image
                  src="/wheelchair.png"
                  alt="Wheelchair accessible icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Wheelchair Accessible</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Specialized vehicles designed for wheelchair users with proper accessibility features.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                <Image
                  src="/audience.png"
                  alt="Group friendly icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Group Friendly</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Maxi cabs accommodating 5-11 passengers for family and group travel.
              </p>
            </div>
          </div>
        </div>
        {/* Premium Services Section */}
        
                    <PremiumServices 
                      buttonOnClick={handleBookOnline}
                    />
        

        {/* Call to Action Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Book Your Ride?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Experience premium transportation services with Maxi Cab Melbourne. Book now for reliable, safe, and comfortable rides.
            </p>
            <Link href="/booking" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105 flex items-center justify-center space-x-3 mx-auto">
              <span>Book Your Ride Now</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
        </div>
      </main>

      {/* Footer */}
    
    </div>
  );
}
