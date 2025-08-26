'use client';

import { useEffect } from 'react';
import { trackLandingViewed } from '@/lib/analytics';

export default function AnalyticsTracker() {
  useEffect(() => {
    trackLandingViewed();
  }, []);

  return null;
}
