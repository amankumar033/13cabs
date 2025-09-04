'use client';

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckIcon, ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function Success() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    // Get form data from URL parameters or localStorage
    const data = searchParams.get('data');
    if (data) {
      try {
        setFormData(JSON.parse(decodeURIComponent(data)));
      } catch (error) {
        console.error('Error parsing form data:', error);
      }
    }
  }, [searchParams]);

  const handleMakeAnotherBooking = () => {
    router.push('/booking');
  };

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl shadow-2xl border border-gray-600/30 text-center max-w-4xl mx-auto w-full">
            {/* Success Icon */}
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-green-500/30">
              <CheckIcon className="w-6 h-6 text-white" />
            </div>

            {/* Main Heading */}
            <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">Booking Submitted Successfully!</h1>
            
            {/* Confirmation Message */}
            <p className="text-gray-300 text-sm mb-4 max-w-2xl mx-auto">
              Thank you for your booking request. We'll contact you shortly to confirm your ride details.
            </p>

            {/* Booking Details (if available) */}
            {formData && (
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-2xl p-3 mb-4">
                <h3 className="text-blue-400 font-bold text-base mb-2">Booking Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
                  {formData.name && (
                    <div>
                      <span className="text-gray-400 text-sm">Name:</span>
                      <p className="text-white font-medium">{formData.name}</p>
                    </div>
                  )}
                  {formData.phone && (
                    <div>
                      <span className="text-gray-400 text-sm">Phone:</span>
                      <p className="text-white font-medium">{formData.phone}</p>
                    </div>
                  )}
                  {formData.serviceType && (
                    <div>
                      <span className="text-gray-400 text-sm">Service:</span>
                      <p className="text-white font-medium">{formData.serviceType}</p>
                    </div>
                  )}
                  {formData.passengers && (
                    <div>
                      <span className="text-gray-400 text-sm">Passengers:</span>
                      <p className="text-white font-medium">{formData.passengers}</p>
                    </div>
                  )}
                  {formData.pickupLocation && (
                    <div>
                      <span className="text-gray-400 text-sm">Pickup:</span>
                      <p className="text-white font-medium">{formData.pickupLocation}</p>
                    </div>
                  )}
                  {formData.destination && (
                    <div>
                      <span className="text-gray-400 text-sm">Destination:</span>
                      <p className="text-white font-medium">{formData.destination}</p>
                    </div>
                  )}
                  {formData.date && (
                    <div>
                      <span className="text-gray-400 text-sm">Date:</span>
                      <p className="text-white font-medium">{formData.date}</p>
                    </div>
                  )}
                  {formData.time && (
                    <div>
                      <span className="text-gray-400 text-sm">Time:</span>
                      <p className="text-white font-medium">{formData.time}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* What happens next section */}
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-6 mb-8">
              <h3 className="text-green-400 font-bold text-xl mb-6">What happens next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-400 font-bold text-lg">1</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Quick Review</h4>
                  <p className="text-gray-300 text-sm">We'll review your booking within 15 minutes</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-400 font-bold text-lg">2</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Confirmation</h4>
                  <p className="text-gray-300 text-sm">You'll receive a confirmation call or SMS</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-400 font-bold text-lg">3</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Pickup</h4>
                  <p className="text-gray-300 text-sm">Your driver will arrive at the scheduled time</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-4 mb-5">
              <h3 className="text-yellow-400 font-bold text-lg mb-3">Need Immediate Assistance?</h3>
                                    <p className="text-gray-300 text-base mb-3">
                        Call us at{' '}
                        <a 
                          href="https://wa.me/61415555576?text=Hi%2C%20I%20just%20submitted%20a%20booking%20and%20need%20immediate%20assistance."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-yellow-400 font-bold text-xl hover:text-yellow-300 transition-colors duration-300"
                        >
                          +61415555576
                        </a>
                      </p>
              <p className="text-gray-400 text-sm">Available 24/7 for your convenience</p>
            </div>

            {/* Information Note */}
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-2xl p-4 mb-5">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-yellow-600 rounded-full"></div>
                </div>
                <p className="text-blue-200 text-sm">
                  You can make another booking or return to our homepage anytime
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <button
                onClick={handleMakeAnotherBooking}
                className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 px-6 rounded-xl font-bold text-base hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105 flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                <span className="hidden sm:inline">Make Another Booking</span>
                <span className="sm:hidden">Make Another</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
              <button
                onClick={handleGoHome}
                className="flex-1 bg-gray-700 text-white py-3 px-6 rounded-xl font-bold text-base hover:bg-gray-600 transition-all duration-300 border border-gray-600 hover:border-gray-500 flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                <span>Go to Homepage</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
    </div>
  );
}
