'use client';

import { useState, useRef, useEffect } from 'react';
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface CustomDatePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
}

export default function CustomDatePicker({
  value = "",
  onChange,
  className = "",
  disabled = false,
  placeholder = "Select date"
}: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? new Date(value) : null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get tomorrow's date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

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

  const handleDateSelect = (date: Date) => {
    if (date >= tomorrow) {
      setSelectedDate(date);
      const dateString = date.toISOString().split('T')[0];
      onChange?.(dateString);
      setIsOpen(false);
    }
  };

  const handleMonthChange = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isDateDisabled = (date: Date) => {
    return date < tomorrow;
  };

  const isDateSelected = (date: Date) => {
    return selectedDate && 
           date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  const days = getDaysInMonth(currentMonth);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        className={`w-full bg-white/15 border border-white/30 rounded-lg px-10 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 backdrop-blur-sm hover:bg-white/25 focus:bg-white/25 text-sm font-medium cursor-pointer ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <span className={selectedDate ? 'text-white' : 'text-gray-300'}>
          {selectedDate ? formatDate(selectedDate) : placeholder}
        </span>
      </div>

      {isOpen && !disabled && (
        <div className="absolute z-50 w-[254px] h-[338px] mt-1 bg-black/90 backdrop-blur-xl border border-white/30 rounded-lg shadow-xl shadow-black/40 p-4 -left-8 sm:left-auto right-0 sm:right-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => handleMonthChange('prev')}
              className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
            >
              <ChevronLeftIcon className="w-5 h-5 text-white" />
            </button>
            <h3 className="text-white font-semibold text-lg">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>
            <button
              onClick={() => handleMonthChange('next')}
              className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
            >
              <ChevronRightIcon className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Days of week */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-xs text-gray-400 font-medium py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => {
              if (!day) {
                return <div key={index} className="h-8"></div>;
              }

              const disabled = isDateDisabled(day);
              const selected = isDateSelected(day);
              const today = isToday(day);

              return (
                <button
                  key={index}
                  onClick={() => handleDateSelect(day)}
                  disabled={disabled}
                  className={`h-8 w-8 text-sm rounded transition-colors duration-200 ${
                    disabled
                      ? 'text-gray-600 cursor-not-allowed'
                      : selected
                      ? 'bg-yellow-400 text-black font-semibold'
                      : today
                      ? 'bg-white/20 text-white font-semibold hover:bg-white/30'
                      : 'text-white hover:bg-yellow-400/20 hover:text-yellow-300'
                  }`}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>

          {/* Info text */}
          <div className="mt-3 text-xs text-gray-400 text-center">
            Only dates from tomorrow onwards are selectable
          </div>
        </div>
      )}
    </div>
  );
}
