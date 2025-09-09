'use client';

import { useState } from "react";
import { UserIcon, PhoneIcon, EnvelopeIcon, ArrowRightIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import CustomDropdown from "@/components/CustomDropdown";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    console.log('Contact form submitted:', formData);
    
    // Show success toast
    toast.success('Message sent successfully! We will get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: '',
      message: ''
    });
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-2xl blur-lg opacity-25"></div>
      
      <div className="relative bg-black/70 backdrop-blur-2xl border border-white/40 rounded-2xl p-6 shadow-xl shadow-black/40">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
            <ChatBubbleLeftRightIcon className="w-6 h-6 text-black" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Contact Form</h3>
            <p className="text-gray-300 text-sm font-medium">We&apos;ll respond within 24 hours</p>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-200">Your Name</label>
              <div className="relative group">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-yellow-400 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full bg-white/15 border border-white/30 rounded-lg px-10 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 backdrop-blur-sm hover:bg-white/25 focus:bg-white/25 text-sm font-medium"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-200">Phone Number</label>
              <div className="relative group">
                <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-yellow-400 transition-colors duration-300" />
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full bg-white/15 border border-white/30 rounded-lg px-10 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 backdrop-blur-sm hover:bg-white/25 focus:bg-white/25 text-sm font-medium"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-200">Email Address</label>
            <div className="relative group">
              <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-yellow-400 transition-colors duration-300" />
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full bg-white/15 border border-white/30 rounded-lg px-10 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 backdrop-blur-sm hover:bg-white/25 focus:bg-white/25 text-sm font-medium"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-200">Service Type</label>
            <CustomDropdown
              options={[
                { value: "maxi-cab", label: "Maxi Cab" },
                { value: "wheelchair-cab", label: "Wheelchair Cab" },
                { value: "ndis-transport", label: "NDIS Transport" },
                { value: "airport-transfer", label: "Airport Transfer" },
                { value: "corporate", label: "Corporate Transport" },
                { value: "other", label: "Other" }
              ]}
              placeholder="Choose service"
              value={formData.serviceType}
              onChange={(value) => handleInputChange('serviceType', value)}
              className="w-full"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-200">Message</label>
            <textarea
              rows={4}
              placeholder="Tell us about your transportation needs, pickup location, destination, date, time, and any special requirements..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="w-full bg-white/15 border border-white/30 rounded-lg px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 backdrop-blur-sm hover:bg-white/25 focus:bg-white/25 resize-none text-sm font-medium"
            ></textarea>
          </div>

          <button
            type="submit"
            className="group relative w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105 overflow-hidden border border-yellow-300/30"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Send Message</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </form>
      </div>
    </div>
  );
}
