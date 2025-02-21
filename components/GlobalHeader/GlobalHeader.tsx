'use client';

import React from 'react';
import { sites, preloadResources, handleNavigation, getCurrentSiteId } from '../../utils/navigation';

export const GlobalHeader: React.FC = () => {
  const currentSiteId = getCurrentSiteId();

  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Left side - Site Switcher */}
          <nav className="flex items-center space-x-8">
            {sites.map((site) => (
              <a
                key={site.name}
                href={site.url}
                className={`flex items-center transition-colors text-sm group relative
                  ${currentSiteId === site.id 
                    ? 'text-blue-400' 
                    : 'text-gray-300 hover:text-white'
                  }`}
                onMouseEnter={() => preloadResources(site.url)}
                onClick={(e) => handleNavigation(site.url, e)}
              >
                <span className="font-medium">{site.name}</span>
                <span className={`ml-2 text-gray-400 hidden sm:inline group-hover:text-gray-300
                  ${currentSiteId === site.id ? 'text-blue-300' : ''}`}>
                  {site.description}
                </span>
                {currentSiteId === site.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Right side - Additional Global Links */}
          <div className="flex items-center space-x-4">
            <select className="bg-transparent text-sm hover:text-gray-300 focus:outline-none">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader; 