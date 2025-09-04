import { PhoneIcon } from '@heroicons/react/24/outline';
import { companyConfig } from '@/config/company';

interface FloatingActionButtonProps {
  isVisible?: boolean;
}

export default function FloatingActionButton({ isVisible = true }: FloatingActionButtonProps) {
  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out transform ${
      isVisible 
        ? 'translate-x-0 translate-y-0 opacity-100 scale-100' 
        : 'translate-x-20 translate-y-20 opacity-0 scale-75'
    }`}>
      <a 
        href={`https://wa.me/${companyConfig.phone.replace('+', '')}?text=${encodeURIComponent(companyConfig.whatsapp.defaultMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-110 transition-all duration-300 border border-yellow-300/30"
      >
        <PhoneIcon className="w-6 h-6 text-black" />
      </a>
    </div>
  );
}
