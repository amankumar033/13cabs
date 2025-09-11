'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false, trickleSpeed: 120 });

export default function RouteProgress() {
  const pathname = usePathname();

  useEffect(() => {
    // Start progress bar on route change start
    NProgress.start();
    // Complete shortly after pathname updates
    const timeout = setTimeout(() => NProgress.done(), 150);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}


