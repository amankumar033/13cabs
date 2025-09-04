'use client';

import { useState, useRef, useEffect } from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';

interface CustomTimePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
}

export default function CustomTimePicker({
  value = "",
  onChange,
  className = "",
  disabled = false,
  placeholder = "Select time"
}: CustomTimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [selectedMinute, setSelectedMinute] = useState<number | null>(null);
  const [isAM, setIsAM] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize from value
  useEffect(() => {
    if (value) {
      const [time] = value.split(':');
      const hour = parseInt(time);
      const minute = parseInt(value.split(':')[1]);
      
      if (hour === 0) {
        setSelectedHour(12);
        setIsAM(true);
      } else if (hour < 12) {
        setSelectedHour(hour);
        setIsAM(true);
      } else if (hour === 12) {
        setSelectedHour(12);
        setIsAM(false);
      } else {
        setSelectedHour(hour - 12);
        setIsAM(false);
      }
      setSelectedMinute(minute);
    }
  }, [value]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTimeSelect = (hour: number, minute: number, am: boolean) => {
    setSelectedHour(hour);
    setSelectedMinute(minute);
    setIsAM(am);
    
    // Convert to 24-hour format
    let hour24 = hour;
    if (!am && hour !== 12) {
      hour24 = hour + 12;
    } else if (am && hour === 12) {
      hour24 = 0;
    }
    
    const timeString = `${hour24.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    onChange?.(timeString);
    setIsOpen(false);
  };

  const formatDisplayTime = () => {
    if (selectedHour !== null && selectedMinute !== null) {
      const displayHour = selectedHour === 0 ? 12 : selectedHour;
      const displayMinute = selectedMinute.toString().padStart(2, '0');
      const period = isAM ? 'AM' : 'PM';
      return `${displayHour}:${displayMinute} ${period}`;
    }
    return '';
  };

  const generateHours = () => {
    return Array.from({ length: 12 }, (_, i) => i + 1);
  };

  const generateMinutes = () => {
    return Array.from({ length: 60 }, (_, i) => i);
  };

  const hours = generateHours();
  const minutes = generateMinutes();

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        className={`w-full bg-white/15 border border-white/30 rounded-lg px-10 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 backdrop-blur-sm hover:bg-white/25 focus:bg-white/25 text-sm font-medium cursor-pointer ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <span className={selectedHour !== null ? 'text-white' : 'text-gray-300'}>
          {selectedHour !== null ? formatDisplayTime() : placeholder}
        </span>
      </div>

      {isOpen && !disabled && (
        <div className="absolute z-50 w-[254px] h-[327px] mt-1 bg-black/90 backdrop-blur-xl border border-white/30 rounded-lg shadow-xl shadow-black/40 p-4 -left-25 sm:left-auto right-0 sm:right-auto">
          <div className="flex items-center justify-center space-x-4">
            {/* Hour Selection */}
            <div className="flex flex-col items-center">
              <label className="text-xs text-gray-400 mb-2 font-medium">Hour</label>
              <div className="h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                {hours.map(hour => (
                  <button
                    type="button"
                    key={hour}
                    onClick={() => {
                      if (selectedMinute !== null) {
                        handleTimeSelect(hour, selectedMinute, isAM);
                      } else {
                        setSelectedHour(hour);
                      }
                    }}
                    className={`w-12 h-8 text-sm rounded transition-colors duration-200 ${
                      selectedHour === hour
                        ? 'bg-yellow-400 text-black font-semibold'
                        : 'text-white hover:bg-yellow-400/20 hover:text-yellow-300'
                    }`}
                  >
                    {hour}
                  </button>
                ))}
              </div>
            </div>

            {/* Minute Selection */}
            <div className="flex flex-col items-center">
              <label className="text-xs text-gray-400 mb-2 font-medium">Minute</label>
              <div className="h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                {minutes.map(minute => (
                  <button
                    type="button"
                    key={minute}
                    onClick={() => {
                      if (selectedHour !== null) {
                        handleTimeSelect(selectedHour, minute, isAM);
                      } else {
                        setSelectedMinute(minute);
                      }
                    }}
                    className={`w-12 h-8 text-sm rounded transition-colors duration-200 ${
                      selectedMinute === minute
                        ? 'bg-yellow-400 text-black font-semibold'
                        : 'text-white hover:bg-yellow-400/20 hover:text-yellow-300'
                    }`}
                  >
                    {minute.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            {/* AM/PM Selection */}
            <div className="flex flex-col items-center">
              <label className="text-xs text-gray-400 mb-2 font-medium">Period</label>
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => {
                    if (selectedHour !== null && selectedMinute !== null) {
                      handleTimeSelect(selectedHour, selectedMinute, true);
                    } else {
                      setIsAM(true);
                    }
                  }}
                  className={`w-12 h-8 text-sm rounded transition-colors duration-200 ${
                    isAM
                      ? 'bg-yellow-400 text-black font-semibold'
                      : 'text-white hover:bg-yellow-400/20 hover:text-yellow-300'
                  }`}
                >
                  AM
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (selectedHour !== null && selectedMinute !== null) {
                      handleTimeSelect(selectedHour, selectedMinute, false);
                    } else {
                      setIsAM(false);
                    }
                  }}
                  className={`w-12 h-8 text-sm rounded transition-colors duration-200 ${
                    !isAM
                      ? 'bg-yellow-400 text-black font-semibold'
                      : 'text-white hover:bg-yellow-400/20 hover:text-yellow-300'
                  }`}
                >
                  PM
                </button>
              </div>
            </div>
          </div>

          {/* Quick time buttons */}
          <div className="mt-4 pt-3 border-t border-white/20">
            <div className="text-xs text-gray-400 mb-2 text-center">Quick Select</div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: '9:00 AM', hour: 9, minute: 0, am: true },
                { label: '12:00 PM', hour: 12, minute: 0, am: false },
                { label: '3:00 PM', hour: 3, minute: 0, am: false },
                { label: '6:00 PM', hour: 6, minute: 0, am: false },
                { label: '9:00 PM', hour: 9, minute: 0, am: false },
                { label: '12:00 AM', hour: 12, minute: 0, am: true }
              ].map((time) => (
                <button
                  type="button"
                  key={time.label}
                  onClick={() => handleTimeSelect(time.hour, time.minute, time.am)}
                  className="px-2 py-1 text-xs bg-white/10 hover:bg-yellow-400/20 text-white hover:text-yellow-300 rounded transition-colors duration-200"
                >
                  {time.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
