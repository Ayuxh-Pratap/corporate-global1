'use client';

import React, { useState, useEffect } from 'react';
import { sites, preloadResources, handleNavigation, getCurrentSiteId } from '../../utils/navigation';
import Image from 'next/image';

export const GlobalHeader: React.FC = () => {
  const currentSiteId = getCurrentSiteId();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredSite, setHoveredSite] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex items-center justify-center transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Left side - Site Switcher */}
          <nav className="flex items-center space-x-8">
            {sites.map((site) => (
              <a
                key={site.name}
                href={site.url}
                className={`flex items-center transition-all duration-300 group relative
                  ${currentSiteId === site.id 
                    ? isScrolled ? 'text-blue-600' : 'text-blue-400'
                    : isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-white'
                  }`}
                onMouseEnter={() => {
                  setHoveredSite(site.id);
                  preloadResources(site.url);
                }}
                onMouseLeave={() => setHoveredSite(null)}
                onClick={(e) => handleNavigation(site.url, e)}
              >
                {/* Site Logo */}
                <div className="w-8 h-8 relative mr-3">
                  <Image
                    src={`/images/logos/${site.id}-light.svg`}
                    alt={`${site.name} logo`}
                    fill
                    className={`transition-all duration-300 ${
                      isScrolled ? 'brightness-0' : 'brightness-100'
                    } ${
                      hoveredSite === site.id ? 
                        site.id === 'corporate' ? 'brightness-0 sepia-[.5] saturate-[50] hue-rotate-[180deg]' :
                        site.id === 'shop' ? 'brightness-0 sepia-[.5] saturate-[50] hue-rotate-[70deg]' :
                        'brightness-0 sepia-[.5] saturate-[50] hue-rotate-[220deg]'
                      : ''
                    }`}
                  />
                </div>

                <div className="flex flex-col">
                  <span className={`font-medium transition-all duration-300 ${
                    isScrolled ? 'text-sm' : 'text-base'
                  }`}>{site.name}</span>
                  <span className={`text-sm transition-all duration-300 ${
                    isScrolled 
                      ? currentSiteId === site.id ? 'text-blue-400' : 'text-gray-400'
                      : currentSiteId === site.id ? 'text-blue-300' : 'text-gray-400'
                  } hidden sm:inline group-hover:${
                    site.id === 'corporate' ? 'text-blue-300' :
                    site.id === 'shop' ? 'text-emerald-300' :
                    'text-indigo-300'
                  }`}>
                    {site.description}
                  </span>
                </div>

                {/* Active Indicator */}
                {currentSiteId === site.id && (
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? 'bg-blue-600' : 'bg-blue-400'
                  }`} />
                )}

                {/* Hover Indicator */}
                <span className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                  site.id === 'corporate' ? 'bg-blue-400' :
                  site.id === 'shop' ? 'bg-emerald-400' :
                  'bg-indigo-400'
                } rounded-full transform origin-left transition-transform duration-300 ${
                  hoveredSite === site.id && currentSiteId !== site.id ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader; 