import { ShieldCheckIcon, ClockIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/outline';

interface WhyChooseUsProps {
  title?: string;
  subtitle?: string;
  features?: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }>;
  noBackground?: boolean;
}

export default function WhyChooseUs({ 
  title = "Why Choose Our Services",
  subtitle = "Experience the difference with our premium transportation services",
  features = [
    {
      icon: ShieldCheckIcon,
      title: "Safe & Secure",
      description: "All our drivers are licensed and vehicles are regularly inspected for your safety."
    },
    {
      icon: ClockIcon,
      title: "24/7 Service",
      description: "Round-the-clock availability for all your transportation needs."
    },
    {
      icon: MapPinIcon,
      title: "Door-to-Door",
      description: "Convenient pickup and drop-off at your exact location."
    },
    {
      icon: StarIcon,
      title: "Professional",
      description: "Experienced, courteous drivers providing exceptional service."
    }
  ],
  noBackground = false
}: WhyChooseUsProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
          <span className="text-white">{title.split(' ').slice(0, -2).join(' ')} </span>
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            {title.split(' ').slice(-2).join(' ')}
          </span>
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className={`text-center p-6 rounded-2xl transition-all duration-300 ${
            noBackground 
              ? 'hover:scale-105' 
              : 'bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-sm border border-white/25 hover:bg-white/25'
          }`}>
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/30 border border-yellow-300/30">
              <feature.icon className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
