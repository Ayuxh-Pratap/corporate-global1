export interface SiteLink {
  name: string;
  url: string;
  description: string;
  id: 'corporate' | 'shop' | 'support';
}

export const sites: SiteLink[] = [
  {
    name: 'Corporate',
    url: 'https://corporate-global1.vercel.app/',
    description: 'Main corporate website',
    id: 'corporate'
  },
  {
    name: 'Shop',
    url: 'https://shop-global2.vercel.app/',
    description: 'E-commerce store',
    id: 'shop'
  },
  {
    name: 'Support',
    url: 'https://support-global3.vercel.app/',
    description: 'Help and documentation',
    id: 'support'
  }
];

// Get current site ID based on port number
export const getCurrentSiteId = (): 'corporate' | 'shop' | 'support' => {
  if (typeof window === 'undefined') return 'corporate';
  
  const port = window.location.port;
  switch (port) {
    case '3000':
      return 'corporate';
    case '3001':
      return 'shop';
    case '3002':
      return 'support';
    default:
      return 'corporate';
  }
};

// Preload resources when hovering over links
export const preloadResources = (url: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  document.head.appendChild(link);
};

// Handle smooth transitions between sites
export const handleNavigation = (url: string, e: React.MouseEvent) => {
  e.preventDefault();
  window.location.href = url;
}; 