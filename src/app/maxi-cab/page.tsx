'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CalendarIcon, ClockIcon, MapPinIcon, PhoneIcon, CheckIcon, ArrowRightIcon, StarIcon, ShieldCheckIcon, CurrencyDollarIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/24/outline';
import WhyChooseUs from "@/components/WhyChooseUs";
import companyConfig from "@/config/company";
export default function MaxiCab() {
  const router = useRouter();

  const handleBookNow = () => {
    router.push('/booking');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
    
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/cab.png"
              alt="Maxi Cab van background"
              fill
              className="object-cover sm:object-cover object-contain"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Content */}
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white block">Maxi Cab</span>
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent block">Service</span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                  <span className="block sm:hidden">Professional maxi Cab services for groups and families. Spacious vehicles for 5-11 passengers.</span>
                  <span className="hidden sm:block">Professional maxi Cab services for groups, families, and events. Spacious vehicles with comfortable seating for 5-11 passengers. Perfect for airport transfers, corporate events, and group travel.</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 sm:pt-0">
                  <a href="/booking" className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 border border-yellow-300/30">
                    <span>Book Maxi Cab</span>
                    <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                  <a 
  href={`tel:${companyConfig.phoneHref}`}                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-2 border-yellow-400 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/15 hover:bg-white/25 flex items-center justify-center space-x-2 sm:space-x-3"
                  >
                    <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Right Side - Maxi Cab Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                  <Image
                    src="/cab.png"
                    alt="Professional maxi Cab van"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

                 {/* Content Sections */}
         <div className="bg-gradient-to-b from-black via-gray-900 to-black">

          {/* Why Choose Our Maxi Cab Service */}
          <WhyChooseUs 
            title="Why Choose Our Maxi Cab Service"
            subtitle="Experience premium group transportation with spacious vehicles, professional drivers, and reliable service for all your travel needs"
            features={[
              {
                icon: () => <Image src="/audience.png" alt="Group transport" width={32} height={32} className="w-8 h-8" />,
                title: "Group Transport",
                description: "Spacious vehicles accommodating 5-11 passengers comfortably"
              },
              {
                icon: ShieldCheckIcon,
                title: "Licensed Drivers",
                description: "Professional, experienced drivers with full licensing"
              },
              {
                icon: ClockIcon,
                title: "24/7 Service",
                description: "Round-the-clock availability for all your travel needs"
              },
              {
                icon: MapPinIcon,
                title: "Door-to-Door",
                description: "Convenient pickup and drop-off at your exact location"
              }
            ]}
          />

                     {/* Maxi Cab Services Grid */}
           <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
             <div className="text-center mb-12">
               <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                 <span className="text-white">Maxi Cab </span>
                 <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Services</span>
               </h2>
               <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                 Comprehensive transportation solutions for groups and events
               </p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                               <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/airport.png"
                      alt="Airport icon"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Airport Transfers</h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Reliable airport transportation with flight monitoring and meet & greet service
                  </p>
                  <button 
                    onClick={handleBookNow}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 inline-block text-center cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
               
               <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                 <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                   <Image
                     src="/audience.png"
                     alt="Group events icon"
                     width={40}
                     height={40}
                     className="w-10 h-10 filter brightness-0 contrast-200"
                   />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-4">Group Events</h3>
                 <p className="text-gray-300 text-base leading-relaxed mb-6">
                   Perfect for corporate events, weddings, parties, and group outings
                 </p>
                 <button 
                   onClick={handleBookNow}
                   className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 inline-block text-center cursor-pointer"
                 >
                   Book Now
                 </button>
               </div>
               
               <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                 <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                   <HeartIcon className="w-10 h-10 text-black" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-4">Family Travel</h3>
                 <p className="text-gray-300 text-base leading-relaxed mb-6">
                   Comfortable family transportation with extra luggage space
                 </p>
                 <button 
                   onClick={handleBookNow}
                   className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 inline-block text-center cursor-pointer"
                 >
                   Book Now
                 </button>
               </div>
               
                               <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/briefcase.png"
                      alt="Briefcase icon"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Corporate Transport</h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Professional business transportation for meetings and events
                  </p>
                  <button 
                    onClick={handleBookNow}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 inline-block text-center cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
               
                                                               <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/palace.png"
                      alt="Palace icon"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Tour & Sightseeing</h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Group tours and sightseeing trips around the city
                  </p>
                  <button 
                    onClick={handleBookNow}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
               
                               <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/route.png"
                      alt="Route icon"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Long Distance</h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Intercity and regional travel with comfortable seating
                  </p>
                  <button 
                    onClick={handleBookNow}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
             </div>
           </div>

           {/* Maxi Cab Benefits Section */}
           <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
             <div className="text-center mb-12">
               <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                 <span className="text-white">Maxi Cab </span>
                 <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Benefits</span>
               </h2>
               <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                 Everything you need for comfortable group transportation
               </p>
             </div>
             
             {/* Benefits Grid with Categories */}
             <div className="space-y-8">
               {/* Vehicle Features Row */}
               <div className="space-y-4">
                 <h3 className="text-xl font-bold text-white text-center mb-6">
                   <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Vehicle Features</span>
                 </h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                   <div className="group p-5 rounded-xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
                     <div className="text-center">
                       <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-400/30 border border-green-300/30">
                         <Image
                           src="/comfort-seat.png"
                           alt="Comfort seat icon"
                           width={28}
                           height={28}
                           className="w-7 h-7"
                         />
                       </div>
                       <h3 className="text-base font-bold text-white mb-2">Spacious Seating</h3>
                       <p className="text-gray-300 text-xs leading-relaxed">5-11 passengers with ample legroom</p>
                     </div>
                   </div>

                   <div className="group p-5 rounded-xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
                     <div className="text-center">
                       <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-400/30 border border-green-300/30">
                         <Image
                           src="/extra-luggage.png"
                           alt="Extra luggage icon"
                           width={28}
                           height={28}
                           className="w-7 h-7"
                         />
                       </div>
                       <h3 className="text-base font-bold text-white mb-2">Extra Luggage</h3>
                       <p className="text-gray-300 text-xs leading-relaxed">Generous storage for all your needs</p>
                     </div>
                   </div>

                   <div className="group p-5 rounded-xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
                     <div className="text-center">
                       <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-400/30 border border-green-300/30">
                         <Image
                           src="/chiller.png"
                           alt="Climate Control"
                           width={28}
                           height={28}
                           className="w-7 h-7"
                         />
                       </div>
                       <h3 className="text-base font-bold text-white mb-2">Climate Control</h3>
                       <p className="text-gray-300 text-xs leading-relaxed">Optimal comfort in all weather</p>
                     </div>
                   </div>

                   <div className="group p-5 rounded-xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
                     <div className="text-center">
                       <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-400/30 border border-green-300/30">
                         <GlobeAltIcon className="w-7 h-7 text-white" />
                       </div>
                       <h3 className="text-base font-bold text-white mb-2">GPS Tracking</h3>
                       <p className="text-gray-300 text-xs leading-relaxed">Real-time location updates</p>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Service Features Row */}
               <div className="space-y-4">
                 <h3 className="text-xl font-bold text-white text-center mb-6">
                   <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Service Features</span>
                 </h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                   <div className="group p-5 rounded-xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                     <div className="text-center">
                       <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-400/30 border border-blue-300/30">
                         <Image
                           src="/driver-white.png"
                           alt="Driver icon"
                           width={28}
                           height={28}
                           className="w-7 h-7"
                         />
                       </div>
                       <h3 className="text-base font-bold text-white mb-2">Pro Drivers</h3>
                       <p className="text-gray-300 text-xs leading-relaxed">Licensed & experienced</p>
                     </div>
                   </div>

                   <div className="group p-5 rounded-xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                     <div className="text-center">
                       <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-400/30 border border-blue-300/30">
                         <CurrencyDollarIcon className="w-7 h-7 text-white" />
                       </div>
                       <h3 className="text-base font-bold text-white mb-2">No Hidden Fees</h3>
                       <p className="text-gray-300 text-xs leading-relaxed">Transparent pricing</p>
                     </div>
                   </div>

                   <div className="group p-5 rounded-xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                     <div className="text-center">
                       <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-400/30 border border-blue-300/30">
                         <ClockIcon className="w-7 h-7 text-white" />
                       </div>
                       <h3 className="text-base font-bold text-white mb-2">24/7 Support</h3>
                       <p className="text-gray-300 text-xs leading-relaxed">Always here to help</p>
                     </div>
                   </div>

                   <div className="group p-5 rounded-xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                     <div className="text-center">
                       <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-400/30 border border-blue-300/30">
                         <CalendarIcon className="w-7 h-7 text-white" />
                       </div>
                       <h3 className="text-base font-bold text-white mb-2">Flexible Booking</h3>
                       <p className="text-gray-300 text-xs leading-relaxed">Advance & last-minute</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

             {/* Feature Highlight */}
             <div className="mt-10 text-center">
               <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/40 rounded-full px-8 py-4 backdrop-blur-sm">
                 <StarIcon className="w-6 h-6 text-yellow-400" />
                 <span className="text-yellow-400 font-bold text-base">All Benefits Included at No Extra Cost</span>
               </div>
             </div>
           </div>

                       {/* Our Maxi Cab Fleet Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  <span className="text-white">Our Maxi Cab </span>
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Fleet</span>
                </h2>
                <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                  Choose from our range of spacious and comfortable vehicles
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Standard Maxi Cab */}
                <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl overflow-hidden hover:bg-white/25 transition-all duration-300">
                 <div className="relative h-48 sm:h-56 lg:h-64 w-full">
                   <Image src="/new-standard.png" alt="Standard maxi cab" fill className="object-cover sm:object-cover object-contain object-center"/>
                 </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">Standard Maxi Cab</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Comfortable seating for up to 8 passengers with luggage space.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {['8 passenger capacity', 'Air conditioning', 'Luggage space'].map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={handleBookNow}
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>Book Now →</span>
                    </button>
                  </div>
                </div>
                
                {/* Large Maxi Cab */}
                <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl overflow-hidden hover:bg-white/25 transition-all duration-300">
                <div className="relative h-48 sm:h-56 lg:h-64 w-full">
                  <Image src="/large-cab.png" alt="Large maxi cab" fill className="object-cover sm:object-cover object-contain object-center"/>
                </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">Large Maxi Cab</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Spacious vehicle for up to 11 passengers with extra luggage capacity.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {['11 passenger capacity', 'Premium comfort', 'Extra luggage space'].map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={handleBookNow}
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>Book Now →</span>
                    </button>
                  </div>
                </div>
                
                {/* Premium Maxi Cab */}
                <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl overflow-hidden hover:bg-white/25 transition-all duration-300">
                <div className="relative h-48 sm:h-56 lg:h-64 w-full">
                  <Image src="/premium-maxi-cab.png" alt="Premium maxi cab" fill className="object-cover sm:object-cover object-contain object-center"/>
                </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">Premium Maxi Cab</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Luxury transportation for special events and corporate travel.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {['Luxury interior', 'Professional driver', 'Event transportation'].map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={handleBookNow}
                      className="w-full bg-gradient-to-br from-yellow-400 to-orange-500 text-black py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>Book Now →</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          {/* Client Testimonials Section */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white">What Our </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Hear from satisfied customers about our maxi Cab service
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 italic mb-4 text-lg">
                  &quot;Perfect for our team events. The drivers are always professional and the vehicles are spotless.&quot;
                </p>
                <h4 className="text-white font-bold text-lg">David Wilson</h4>
                <p className="text-gray-300 text-sm">Corporate Client</p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 italic mb-4 text-lg">
                  &quot;Great for family trips to the airport. Plenty of space for luggage and very comfortable ride.&quot;
                </p>
                <h4 className="text-white font-bold text-lg">Sarah Thompson</h4>
                <p className="text-gray-300 text-sm">Family Traveler</p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 italic mb-4 text-lg">
                  &quot;Reliable service for all our corporate events. Highly recommend for group transportation.&quot;
                </p>
                <h4 className="text-white font-bold text-lg">Michael Rodriguez</h4>
                <p className="text-gray-300 text-sm">Event Organizer</p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Book Your Maxi Cab
              </h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Easy booking process with instant confirmation and flexible scheduling
              </p>
                             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button 
                   onClick={handleBookNow}
                   className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105 flex items-center justify-center space-x-3 cursor-pointer"
                 >
                   <span>Book Now</span>
                   <ArrowRightIcon className="w-5 h-5" />
                 </button>
                 <Link   href={`tel:${companyConfig.phoneHref}`} className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/10 hover:bg-white/25 flex items-center justify-center space-x-3">
                  <PhoneIcon className="w-5 h-5 mr-3"/>
                   Call Now
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </main>

   
    </div>
  );
}
