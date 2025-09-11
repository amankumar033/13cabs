'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CalendarIcon, ClockIcon, MapPinIcon, CheckIcon, ArrowRightIcon, StarIcon, ShieldCheckIcon, HeartIcon } from '@heroicons/react/24/outline';
import WhyChooseUs from "@/components/WhyChooseUs";
import PremiumServices from "@/components/PremiumServices";

export default function WheelchairCab() {
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
              src="/wheelchair-cab.png"
              alt="Wheelchair accessible Cab van background"
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
                  <span className="text-white block">Wheelchair</span>
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent block">Accessible Cab</span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                  <span className="block sm:hidden">Professional wheelchair accessible transportation in Melbourne. Safe and reliable rides with trained drivers.</span>
                  <span className="hidden sm:block">Professional wheelchair accessible transportation services in Melbourne. Safe, comfortable, and reliable rides for wheelchair users with trained drivers and specialized vehicles.</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 sm:pt-0">
                  <button 
                    onClick={handleBookNow}
                    className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 border border-yellow-300/30 cursor-pointer"
                  >
                    <span>Book Wheelchair Cab</span>
                    <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <Link 
                    href="/contact"
                    className="group border-2 border-white/40 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/10 hover:bg-white/25 flex items-center justify-center space-x-2 sm:space-x-3"
                  >
                    <span>Contact Us</span>
                  </Link>
                </div>

                {/* Key Features */}
                <div className="space-y-3 flex flex-col items-center lg:items-start">
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium">Wheelchair Accessible</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium">Trained Drivers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium">24/7 Available</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Wheelchair Cab Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                  <Image
                    src="/wheelchair-cab.png"
                    alt="Wheelchair accessible Cab van"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover sm:object-cover object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="bg-gradient-to-b from-black via-gray-900 to-black">
          {/* Why Choose Our Wheelchair Cab Service */}
          <WhyChooseUs 
            title="Why Choose Our Wheelchair Cab Service"
            subtitle="Experience the difference with our specialized wheelchair accessible transportation"
            noBackground={true}
            features={[
                             {
                 icon: () => (
                   <Image
                     src="/wheelchair.png"
                     alt="Wheelchair Accessible"
                     width={28}
                     height={28}
                     className="w-7 h-7"
                   />
                 ),
                 title: "Wheelchair Accessible",
                 description: "Specially designed vehicles with ramps and secure restraints for safe wheelchair transportation."
               },
              {
                icon: ShieldCheckIcon,
                title: "Safety First",
                description: "Trained drivers and regularly inspected vehicles ensure your safety and comfort."
              },
              {
                icon: ClockIcon,
                title: "24/7 Service",
                description: "Round-the-clock availability for all your transportation needs."
              },
                             {
                 icon: () => (
                   <Image
                     src="/Driver.png"
                     alt="Professional Driver"
                     width={28}
                     height={28}
                     className="w-7 h-7"
                   />
                 ),
                 title: "Professional Drivers",
                 description: "Experienced drivers trained in wheelchair accessibility and passenger care."
               }
            ]}
          />

          {/* Wheelchair Services Grid */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white">Wheelchair </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Comprehensive accessible transportation solutions for all your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                             <div className="text-center p-5 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                 <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                   <Image
                     src="/airport.png"
                     alt="Airport Wheelchair Cab"
                     width={32}
                     height={32}
                     className="w-8 h-8"
                   />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Airport Wheelchair Cab</h3>
                 <p className="text-gray-300 text-sm leading-relaxed">
                   Reliable airport transportation with flight monitoring and meet & greet service
                 </p>
               </div>
              
              <div className="text-center p-5 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                  <HeartIcon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Medical Appointments</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Safe and comfortable transportation to medical facilities and appointments
                </p>
              </div>
              
              <div className="text-center p-5 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/cart.png"
                    alt="Shopping cart icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Shopping & Errands</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Convenient transportation for daily activities and shopping trips
                </p>
              </div>
              
              <div className="text-center p-5 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                  <MapPinIcon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Social Outings</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Enjoy social activities and events with reliable accessible transportation
                </p>
              </div>
              
              <div className="text-center p-5 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                  <CalendarIcon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Regular Transport</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Scheduled transportation for work, education, or regular commitments
                </p>
              </div>
              
                             <div className="text-center p-5 rounded-xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                 <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                   <Image
                     src="/route.png"
                     alt="Long Distance"
                     width={32}
                     height={32}
                     className="w-8 h-8"
                   />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Long Distance</h3>
                 <p className="text-gray-300 text-sm leading-relaxed">
                   Comfortable long-distance travel with accessible facilities
                 </p>
               </div>
            </div>
          </div>

                     {/* Our Premium Services Component */}
           <PremiumServices 
             buttonOnClick={handleBookNow}
           />

          {/* Client Testimonials Section */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white">What Our </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Hear from satisfied customers about our wheelchair Cab service
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
                  &quot;The drivers are always professional and the vehicles are perfectly accessible. Makes my daily commute so much easier.&quot;
                </p>
                <h4 className="text-white font-bold text-lg">Emma Johnson</h4>
                <p className="text-gray-300 text-sm">Regular Commuter</p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 italic mb-4 text-lg">
                  &quot;Excellent service for medical appointments. The drivers are trained and very caring. Highly recommend!&quot;
                </p>
                <h4 className="text-white font-bold text-lg">Robert Chen</h4>
                <p className="text-gray-300 text-sm">Medical Patient</p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 italic mb-4 text-lg">
                  &quot;Perfect for family outings. The accessible vehicles give us peace of mind and comfort.&quot;
                </p>
                <h4 className="text-white font-bold text-lg">Maria Rodriguez</h4>
                <p className="text-gray-300 text-sm">Family Member</p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Book Your Wheelchair Cab?
              </h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Experience safe and comfortable wheelchair accessible transportation with Maxi Cab Melbourne. Book now for reliable service.
              </p>
              <Link href="/booking" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105 flex items-center justify-center space-x-3 mx-auto">
                <span className="block sm:hidden">Book Cab Now</span>
                <span className="hidden sm:block">Book Wheelchair Cab Now</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>

     
    </div>
  );
}
