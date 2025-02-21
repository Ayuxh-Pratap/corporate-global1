export interface SiteLink {
  name: string;
  url: string;
  description: string;
}

export const sites: SiteLink[] = [
  {
    name: 'Corporate',
    url: 'https://corporate-global1.vercel.app/',
    description: 'Main corporate website'
  },
  {
    name: 'Shop',
    url: 'https://shop-global2.vercel.app/',
    description: 'E-commerce store'
  },
  {
    name: 'Support',
    url: 'https://support-global3.vercel.app/',
    description: 'Help and documentation'
  }
];

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