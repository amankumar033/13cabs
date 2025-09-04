import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ClockIcon, MapPinIcon, PhoneIcon, UserIcon, TruckIcon, CheckIcon, ArrowRightIcon, StarIcon, ShieldCheckIcon, CurrencyDollarIcon, GlobeAltIcon, HeartIcon, CogIcon, AcademicCapIcon, ShoppingCartIcon, PaintBrushIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function NDISTransport() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/ndis.png"
              alt="NDIS Transport Service background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Side - Content */}
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white block">NDIS Transport</span>
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent block">Service</span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                  <span className="block sm:hidden">NDIS approved transportation services. Professional drivers and wheelchair accessible vehicles.</span>
                  <span className="hidden sm:block">NDIS approved transportation services for participants. Professional drivers, wheelchair accessible vehicles, and comprehensive support aligned with your NDIS plan.</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 sm:pt-0">
                  <Link href="/booking" className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 border border-yellow-300/30">
                    <span>Book NDIS Transport</span>
                    <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  
                  <a 
                    href="https://wa.me/61415555576?text=Hi%2C%20I%27d%20like%20to%20book%20NDIS%20Transport%20services.%20Please%20let%20me%20know%20about%20availability%20and%20pricing."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-2 border-yellow-400 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/10 hover:bg-white/25 flex items-center justify-center space-x-2 sm:space-x-3"
                  >
                    <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Call to Book</span>
                  </a>
                </div>

               
              </div>

              {/* Right Side - Background Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                  <Image
                    src="/ndis.png"
                    alt="NDIS Transport vehicles"
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

{/* Why Choose Our NDIS Transport Section */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white">Why Choose Our </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">NDIS Transport</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                We're committed to providing exceptional service that meets NDIS standards and exceeds participant expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                  <ShieldCheckIcon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">NDIS Approved</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Fully compliant with NDIS standards and requirements
                </p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                  <ClockIcon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Flexible Scheduling</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Accommodate your NDIS plan and appointment schedules
                </p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                  <MapPinIcon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Door-to-Door Service</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Complete assistance from pickup to destination
                </p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
                  <HeartIcon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Caring Support</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Professional, compassionate drivers trained in disability support
                </p>
              </div>
            </div>
          </div>

          {/* NDIS Services Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white">NDIS </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Comprehensive transportation support for all your NDIS-related activities
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Medical Appointments */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-400/30 border border-purple-300/30 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/apointment.png"
                    alt="Medical appointment icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Medical Appointments</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Transport to hospitals, clinics, and healthcare facilities
                </p>
              </div>

              {/* Therapy Sessions */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-400/30 border border-orange-300/30 group-hover:scale-110 transition-transform duration-300">
                  <HeartIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Therapy Sessions</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Transport to physiotherapy, occupational therapy, and treatments
                </p>
              </div>

              {/* Social Activities */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-pink-400/30 border border-pink-300/30 group-hover:scale-110 transition-transform duration-300">
                  <StarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Social Activities</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Support for community participation and social events
                </p>
              </div>

              {/* Education & Work */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-400/30 border border-blue-300/30 group-hover:scale-110 transition-transform duration-300">
                  <AcademicCapIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Education & Work</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Transport to educational institutions and workplaces
                </p>
              </div>

              {/* Shopping & Errands */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-400/30 border border-green-300/30 group-hover:scale-110 transition-transform duration-300">
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
                  Assistance with daily activities and personal errands
                </p>
              </div>

              {/* Recreation */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-400/30 border border-cyan-300/30 group-hover:scale-110 transition-transform duration-300">
                  <PaintBrushIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Recreation</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Access to recreational activities and entertainment
                </p>
              </div>
            </div>
          </div>

          

          {/* NDIS Plan Support Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white">NDIS Plan </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Support</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                We work closely with your NDIS plan to ensure all transportation needs are covered
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/30 border border-yellow-300/30 flex-shrink-0">
                      <CheckIcon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Plan Alignment</h3>
                      <p className="text-gray-300">Our services align perfectly with your NDIS plan goals and funding categories.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/30 border border-yellow-300/30 flex-shrink-0">
                      <CurrencyDollarIcon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Transparent Billing</h3>
                      <p className="text-gray-300">Clear, itemized invoices that make it easy to track your NDIS funding usage.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/30 border border-yellow-300/30 flex-shrink-0">
                      <UserIcon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Support Coordination</h3>
                      <p className="text-gray-300">We work with your support coordinator to ensure seamless service delivery.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">NDIS Funding Categories</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white font-medium">Core Supports</span>
                      <CheckIcon className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white font-medium">Capacity Building</span>
                      <CheckIcon className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white font-medium">Capital Supports</span>
                      <CheckIcon className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonials Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white">What Our </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Hear from NDIS participants and their families about our service
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
                  "The drivers are incredibly understanding and the service is perfectly aligned with my NDIS plan. Highly recommend!"
                </p>
                <h4 className="text-white font-bold text-lg">Emma Johnson</h4>
                <p className="text-gray-300 text-sm">NDIS Participant</p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 italic mb-4 text-lg">
                  "As a support coordinator, I trust MaxiWheelchair for all my clients' transportation needs. Reliable and professional."
                </p>
                <h4 className="text-white font-bold text-lg">James Wilson</h4>
                <p className="text-gray-300 text-sm">Support Coordinator</p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 italic mb-4 text-lg">
                  "The NDIS transport service has made such a difference for our family. The drivers are caring and professional."
                </p>
                <h4 className="text-white font-bold text-lg">Lisa Chen</h4>
                <p className="text-gray-300 text-sm">Family Member</p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your NDIS transportation needs. We're here to help you maintain your independence and access the community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105 flex items-center justify-center space-x-3">
                  <span>Book Now</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <button className="border-2 border-yellow-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/10 hover:bg-white/25 flex items-center justify-center space-x-3">
                  <PhoneIcon className="w-5 h-5" />
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
