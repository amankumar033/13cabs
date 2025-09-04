'use client';

import FloatingActionButton from './FloatingActionButton';
import { useMobileMenu } from '@/contexts/MobileMenuContext';

export default function FloatingActionButtonWrapper() {
  const { isMobileMenuOpen } = useMobileMenu();
  
  return <FloatingActionButton isVisible={!isMobileMenuOpen} />;
}
