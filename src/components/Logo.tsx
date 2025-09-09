import Image from 'next/image';
import { 
  TruckIcon, 
  MapPinIcon,
  StarIcon,
  HeartIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  CogIcon,
  HomeIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { companyConfig } from '@/config/company';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

const iconMap = {
  TruckIcon,
  MapPinIcon,
  StarIcon,
  HeartIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  CogIcon,
  HomeIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon
};

const sizeClasses = {
  sm: 'w-24 h-8',   // wider than tall for horizontal logos
  md: 'w-32 h-10',
  lg: 'w-40 h-14',
  xl: 'w-48 h-16'
};

const iconSizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8'
};

export default function Logo({ size = 'lg', showText = true, className = '' }: LogoProps) {
  const { logo } = companyConfig;
  
  const IconComponent = iconMap[logo.icon as keyof typeof iconMap] || TruckIcon;
  
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`${sizeClasses[size]} flex items-center justify-center`}>
        {logo.useIcon ? (
          <IconComponent className={`${iconSizeClasses[size]} text-black`} />
        ) : (
          <Image
            src={logo.image}
            alt={logo.alt}
            width={size === 'sm' ? 96 : size === 'md' ? 128 : size === 'lg' ? 160 : 192}
            height={size === 'sm' ? 32 : size === 'md' ? 40 : size === 'lg' ? 56 : 64}
            className="w-full h-full object-contain"
          />
        )}
      </div>
      {showText && (
        <div>
          <h1 className={`${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : size === 'lg' ? 'text-xl' : 'text-2xl'} font-bold text-white`}>
            {companyConfig.name}
          </h1>
          <p className={`${size === 'sm' ? 'text-xs' : 'text-xs'} text-gray-300 font-medium hidden sm:block`}>
            {companyConfig.tagline}
          </p>
        </div>
      )}
    </div>
  );
}
