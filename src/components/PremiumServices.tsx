'use client';

import { TruckIcon, CalendarIcon, ClockIcon, CurrencyDollarIcon, GlobeAltIcon, HeartIcon, StarIcon, ShieldCheckIcon, CogIcon, UserIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Service {
  icon: string;
  title: string;
  description: string;
  feature: {
    icon: string;
    text: string;
  };
}

interface PremiumServicesProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
  showButtons?: boolean;
  buttonText?: string;
  buttonOnClick?: (service: Service) => void;
  layout?: 'grid' | 'list';
  columns?: 2 | 3 | 4;
  cardStyle?: 'default' | 'compact' | 'featured';
  className?: string;
}

export default function PremiumServices({
  title = "Our Premium Services",
  subtitle = "Choose from our comprehensive range of transportation services designed to meet all your travel needs",
  services = [
    {
      icon: 'airport',
      title: "Airport Transfers",
      description: "Book maxi cab for Melbourne Airport transfers. Enjoy fixed fares, professional drivers, and timely pickup every time, with plenty of room for family and luggage.",
      feature: {
        icon: "currency",
        text: "Fixed Fares"
      }
    },
    {
      icon: 'ship',
      title: "Cruise Transfers",
      description: "Travel comfortably to Station Pier or other cruise terminals in Melbourne. We offer group friendly maxi cabs with fixed pricing and reliable door to ship service.",
      feature: {
        icon: "clock",
        text: "Timely Service"
      }
    },
    {
      icon: 'baby-car-seat',
      title: "Baby Seat Cab",
      description: "Need a cab with baby seats in Melbourne? We provide child safe transport with rear facing, forward facing, and booster seats included at no extra cost.",
      feature: {
        icon: "heart",
        text: "Child Safe"
      }
    },
    {
      icon: 'wedding-car',
      title: "Wedding Maxi Cab",
      description: "Make your special day smooth with our wedding maxi cabs. Ideal for bridal parties and guests, ensuring everyone arrives together, on time, and without stress.",
      feature: {
        icon: "calendar",
        text: "Special Events"
      }
    },
    {
      icon: 'wheelchair',
      title: "Wheelchair Cab",
      description: "We offer safe, accessible wheelchair Cab services in Melbourne. Our trained drivers and fitted vans ensure comfortable travel for passengers with mobility needs.",
      feature: {
        icon: "shield",
        text: "Accessible"
      }
    },
    {
      icon: 'truck',
      title: "Parcel Delivery",
      description: "Same day parcel delivery across Melbourne. Use our maxi cab service to send packages safely, quickly, and affordably to homes, offices, or any suburb.",
      feature: {
        icon: "clock",
        text: "Same Day"
      }
    }
  ],
  showButtons = true,
  buttonText = "Book Online",
  buttonOnClick,
  layout = 'grid',
  columns = 3,
  cardStyle = 'default',
  className = ""
}: PremiumServicesProps) {
  const router = useRouter();

  const handleDefaultBooking = () => {
    router.push('/booking');
  };
  
  // Grid column classes based on columns prop
  const getGridCols = () => {
    switch (columns) {
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  // Card styling based on cardStyle prop
  const getCardClasses = () => {
    switch (cardStyle) {
      case 'compact':
        return 'p-4 hover:bg-white/20';
      case 'featured':
        return 'p-8 hover:bg-white/30 hover:scale-105';
      default:
        return 'p-6 hover:bg-white/25';
    }
  };

  // Icon sizing based on cardStyle
  const getIconSize = () => {
    switch (cardStyle) {
      case 'compact':
        return 'w-12 h-12';
      case 'featured':
        return 'w-20 h-20';
      default:
        return 'w-16 h-16';
    }
  };

  // Icon inner sizing based on cardStyle
  const getInnerIconSize = () => {
    switch (cardStyle) {
      case 'compact':
        return 'w-6 h-6';
      case 'featured':
        return 'w-10 h-10';
      default:
        return 'w-8 h-8';
    }
  };

  // Render icon function
  const renderIcon = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      'airport': '/airport.png',
      'ship': '/ship.png',
      'baby-car-seat': '/baby-car-seat.png',
      'wedding-car': '/wedding-car.png',
      'wheelchair': '/wheelchair.png',
      'route': '/route.png',
    };

    if (iconMap[iconName]) {
      return (
        <Image
          src={iconMap[iconName]}
          alt={iconName}
          width={32}
          height={32}
          className={`${getInnerIconSize()}`}
        />
      );
    }

    // Fallback to icon component
    const iconComponentMap: { [key: string]: React.ComponentType<any> } = {
      'heart': HeartIcon,
      'star': StarIcon,
      'shield': ShieldCheckIcon,
      'clock': ClockIcon,
      'calendar': CalendarIcon,
      'map-pin': MapPinIcon,
      'currency': CurrencyDollarIcon,
      'user': UserIcon,
      'truck': TruckIcon,
    };
    
    const IconComponent = iconComponentMap[iconName] || TruckIcon;
    return <IconComponent className={`${getInnerIconSize()} text-black`} />;
  };

  // Render feature icon
  const renderFeatureIcon = (iconName: string) => {
    // Special case for star icon - use StarIcon component
    if (iconName === 'star') {
      return (
        <div className="flex justify-center">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
          ))}
        </div>
      );
    }
    
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'heart': HeartIcon,
      'shield': ShieldCheckIcon,
      'clock': ClockIcon,
      'calendar': CalendarIcon,
      'map-pin': MapPinIcon,
      'currency': CurrencyDollarIcon,
      'user': UserIcon,
    };
    
    const IconComponent = iconMap[iconName] || StarIcon;
    return <IconComponent className="w-4 h-4 text-yellow-400" />;
  };

  return (
    <div className={`max-w-7xl mx-auto px-6 lg:px-8 py-16 ${className}`}>
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            <span className="text-white">{title.split(' ').slice(0, -2).join(' ')} </span>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              {title.split(' ').slice(-2).join(' ')}
            </span>
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      {layout === 'grid' ? (
        <div className={`grid ${getGridCols()} gap-6`}>
          {services.map((service, index) => (
            <div key={index} className={`bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl ${getCardClasses()} transition-all duration-300`}>
              <div className={`${getIconSize()} bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30`}>
                {renderIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center">
                {service.description}
              </p>
              <div className="flex items-center justify-center space-x-2 mb-4">
                {renderFeatureIcon(service.feature.icon)}
                <span className="text-yellow-400 font-semibold text-sm">{service.feature.text}</span>
              </div>
              {showButtons && (
                <button 
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  onClick={() => buttonOnClick ? buttonOnClick(service) : handleDefaultBooking()}
                >
                  <Image
                    src="/car.png"
                    alt="Car"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span>{buttonText}</span>
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={index} className={`bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 rounded-2xl ${getCardClasses()} transition-all duration-300`}>
              <div className="flex items-center space-x-6">
                <div className={`${getIconSize()} bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/30 border border-yellow-300/30 flex-shrink-0`}>
                  {renderIcon(service.icon)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center space-x-2 mb-4">
                    {renderFeatureIcon(service.feature.icon)}
                    <span className="text-yellow-400 font-semibold text-sm">{service.feature.text}</span>
                  </div>
                  {showButtons && (
                    <button 
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
                      onClick={() => buttonOnClick ? buttonOnClick(service) : handleDefaultBooking()}
                    >
                      <Image
                        src="/car.png"
                        alt="Car"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                      <span>{buttonText}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
