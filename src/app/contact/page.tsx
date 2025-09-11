import Image from "next/image";
import Link from "next/link";
import { ClockIcon, MapPinIcon, PhoneIcon, UserIcon, CheckIcon, ArrowRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section - Get in Touch */}
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/new-standard.png"
              alt="Contact us background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white block">Get in </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent block">Touch</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto">
                Ready to book your transportation service? Contact us today for reliable, professional, and accessible transportation solutions in Melbourne.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <a 
                  href="https://wa.me/61415555576?text=Hi%2C%20I&amp;#39;d%20like%20to%20book%20a%20ride%20with%20Maxi%20Cab.%20Please%20let%20me%20know%20about%20availability%20and%20pricing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 border border-yellow-300/30"
                >
                  <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Call to Book</span>
                </a>
                
                <a 
                  href="mailto:maxicab@gmail.com?subject=Booking%20Inquiry%20-%20Maxi%20Cab%20Services&body=Hi%2C%0A%0AI%20would%20like%20to%20inquire%20about%20booking%20a%20ride%20with%20Maxi%20Cab.%20Please%20let%20me%20know%20about%20availability%20and%20pricing.%0A%0AThank%20you%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-yellow-400 text-yellow-400 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/10 hover:bg-white/25 flex items-center justify-center space-x-2 sm:space-x-3"
                >
                  <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Email Us</span>
                </a>
              </div>

              {/* Service Highlights */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2">
                  <CheckIcon className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-medium">24/7 Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckIcon className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-medium">Professional Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckIcon className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-medium">Wheelchair Accessible</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="bg-gradient-to-b from-black via-gray-900 to-black">
          {/* Contact Information Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white">Contact </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Information</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Get in touch with us through any of these convenient methods
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Phone */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-yellow-400 font-semibold text-lg mb-2">+61415555576</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Call us 24/7 for immediate assistance
                </p>
              </div>

              {/* Email */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                  <EnvelopeIcon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-yellow-400 font-semibold text-sm sm:text-base mb-2 break-all">maxitaxiaustralia@gmail.com</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Send us an email for inquiries
                </p>
              </div>

              {/* Service Area */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                  <MapPinIcon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Service Area</h3>
                <p className="text-yellow-400 font-semibold text-lg mb-2">Melbourne Metropolitan Area</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We service greater Melbourne and surrounding regions
                </p>
              </div>

              {/* Operating Hours */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30 group-hover:scale-110 transition-transform duration-300">
                  <ClockIcon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Operating Hours</h3>
                <p className="text-yellow-400 font-semibold text-lg mb-2">24/7 Service</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Available round the clock for your needs
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white">Send Us a </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Message</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Have a question or need a quote? Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Contact Form */}
              <ContactForm />

              {/* Additional Information */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Response Times</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <CheckIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">Phone calls: Immediate response</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <CheckIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">Email inquiries: Within 2 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <CheckIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">Form submissions: Within 24 hours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Emergency Bookings</h3>
                  <p className="text-gray-300 mb-4">
                    Need immediate transportation? Call us directly for urgent bookings and last-minute arrangements.
                  </p>
                  <div className="flex items-center space-x-2">
                    <PhoneIcon className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">+61415555576</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Sunday</span>
                      <span className="text-yellow-400">24/7 Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Public Holidays</span>
                      <span className="text-yellow-400">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white">Frequently Asked </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Find answers to common questions about our transportation services
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">How far in advance should I book?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We recommend booking at least 2-4 hours in advance for regular services. For airport transfers, book 24 hours ahead. However, we can often accommodate last-minute bookings.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Do you provide wheelchair accessible vehicles?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Yes, we have a fleet of wheelchair accessible vehicles with ramps and secure restraints. All drivers are trained in accessibility assistance.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">What payment methods do you accept?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We accept cash, credit cards, and NDIS funding. Corporate accounts and regular customers can set up account billing.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Are your drivers licensed and insured?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    All our drivers are fully licensed, insured, and undergo regular training. We maintain comprehensive insurance coverage for all vehicles and passengers.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Do you service all areas of Melbourne?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We service the greater Melbourne metropolitan area and surrounding regions. Contact us to confirm service availability in your specific location.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Can I track my ride in real-time?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Yes, we provide real-time GPS tracking for all bookings. You&apos;ll receive updates via SMS or phone call about your driver&apos;s location and estimated arrival time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white">Service </span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Areas</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                We provide reliable transportation services across Melbourne and surrounding areas
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl p-6 text-center">
                <MapPinIcon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Melbourne CBD</h3>
                <p className="text-gray-300 text-sm">City center and surrounding suburbs</p>
              </div>

              <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl p-6 text-center">
                <MapPinIcon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Eastern Suburbs</h3>
                <p className="text-gray-300 text-sm">Box Hill, Ringwood, and surrounding areas</p>
              </div>

              <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl p-6 text-center">
                <MapPinIcon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Western Suburbs</h3>
                <p className="text-gray-300 text-sm">Footscray, Sunshine, and surrounding areas</p>
              </div>

              <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl p-6 text-center">
                <MapPinIcon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Northern Suburbs</h3>
                <p className="text-gray-300 text-sm">Preston, Heidelberg, and surrounding areas</p>
              </div>

              <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl p-6 text-center">
                <MapPinIcon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Southern Suburbs</h3>
                <p className="text-gray-300 text-sm">Frankston, Dandenong, and surrounding areas</p>
              </div>

              <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl p-6 text-center">
                <MapPinIcon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Airport Services</h3>
                <p className="text-gray-300 text-sm">Melbourne Airport and surrounding areas</p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Book Your Ride?
              </h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Don&apos;t wait! Contact us now for reliable, professional transportation services in Melbourne.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/booking" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3">
                  <span>Book Now</span>
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <a 
                  href="https://wa.me/61415555576?text=Hi%2C%20I%27d%20like%20to%20book%20a%20ride%20with%20Maxi%20Cab.%20Please%20let%20me%20know%20about%20availability%20and%20pricing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-yellow-400 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/10 hover:bg-white/25 flex items-center justify-center space-x-2 sm:space-x-3"
                >
                  <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
