'use client';

import React from 'react';
import { sites, preloadResources, handleNavigation } from '../../utils/navigation';

export const GlobalHeader: React.FC = () => {
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
                className="flex items-center hover:text-gray-300 transition-colors text-sm"
                onMouseEnter={() => preloadResources(site.url)}
                onClick={(e) => handleNavigation(site.url, e)}
              >
                <span className="font-medium">{site.name}</span>
                <span className="ml-2 text-gray-400 hidden sm:inline">{site.description}</span>
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