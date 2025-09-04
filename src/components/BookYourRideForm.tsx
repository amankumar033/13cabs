'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserIcon, PhoneIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import CustomDropdown from "@/components/CustomDropdown";
import CustomDatePicker from "@/components/CustomDatePicker";
import CustomTimePicker from "@/components/CustomTimePicker";

interface BookYourRideFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  showIcon?: boolean;
  className?: string;
}

export default function BookYourRideForm({
  title = "Book Your Ride",
  subtitle = "Fill in the details below",
  buttonText = "Book Now",
  showIcon = true,
  className = ""
}: BookYourRideFormProps) {
  const router = useRouter();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    passengers: '',
    pickupLocation: '',
    destination: '',
    date: '',
    time: '',
    specialRequirements: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Redirect to success page with form data
    const encodedData = encodeURIComponent(JSON.stringify(formData));
    router.push(`/success?data=${encodedData}`);
  };

  return (
    <div className={`bg-black/70 backdrop-blur-2xl border border-white/40 rounded-2xl p-6 shadow-xl shadow-black/40 ${className}`}>
      {/* Form Header */}
      <div className="flex items-center space-x-3 mb-5">
        {showIcon && (
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
            <UserIcon className="w-6 h-6 text-black" />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-300 text-sm font-medium">{subtitle}</p>
        </div>
      </div>

      {/* Form */}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <label className="text-sm font-semibold text-gray-200">Number of Passengers</label>
            <input
              type="number"
              min="1"
              placeholder="Min 1"
              value={formData.passengers}
              onChange={(e) => handleInputChange('passengers', e.target.value)}
              className="w-full bg-white/15 border border-white/30 rounded-lg px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 backdrop-blur-sm hover:bg-white/25 focus:bg-white/25 text-sm font-medium"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-200">Pickup Location</label>
            <div className="relative group">
              <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-yellow-400 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Enter pickup address"
                value={formData.pickupLocation}
                onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                className="w-full bg-white/15 border border-white/30 rounded-lg px-10 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 backdrop-blur-sm hover:bg-white/25 focus:bg-white/25 text-sm font-medium"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-200">Destination</label>
            <div className="relative group">
              <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-yellow-400 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Enter destination"
                value={formData.destination}
                onChange={(e) => handleInputChange('destination', e.target.value)}
                className="w-full bg-white/15 border border-white/30 rounded-lg px-10 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 backdrop-blur-sm hover:bg-white/25 focus:bg-white/25 text-sm font-medium"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-200">Pick a Date</label>
            <CustomDatePicker
              placeholder="Date"
              value={formData.date}
              onChange={(value) => handleInputChange('date', value)}
              className="w-full"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-200">Pick a Time</label>
            <CustomTimePicker
              placeholder="Time"
              value={formData.time}
              onChange={(value) => handleInputChange('time', value)}
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-200">Special Requirements (Optional)</label>
          <textarea
            rows={3}
            placeholder="Any special requirements or notes..."
            value={formData.specialRequirements}
            onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
            className="w-full bg-white/15 border border-white/30 rounded-lg px-3 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 backdrop-blur-sm hover:bg-white/25 focus:bg-white/25 resize-none text-sm font-medium"
          ></textarea>
        </div>

        <button
          type="submit"
          className="group relative w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-xl font-bold text-base hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105 overflow-hidden border border-yellow-300/30"
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <span>{buttonText}</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </form>
    </div>
  );
}
