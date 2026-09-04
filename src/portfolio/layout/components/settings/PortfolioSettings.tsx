import { useEffect, useRef, useState } from 'react';

import { Settings } from 'lucide-react';

import { PortfolioThemeSelector } from '.';
import { SETTINGS_TEXT } from '@/constants/layout';

export const PortfolioSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleVisibilityToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative" ref={settingsRef}>
      <button
        className="cursor-pointer"
        type="button"
        onClick={handleVisibilityToggle}
        aria-label="Abrir Configuración"
      >
        <Settings />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 min-w-max rounded-lg border border-border bg-card p-4 text-card-foreground shadow-lg">
          <div>
            <h2 className="font-semibold">{SETTINGS_TEXT.configuration}</h2>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium">{SETTINGS_TEXT.selectedTheme}</p>
            <PortfolioThemeSelector />
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium">
              {SETTINGS_TEXT.languageSelector}
            </p>
            <p>{SETTINGS_TEXT.tbd}</p>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium">{SETTINGS_TEXT.fontSize}</p>
            <p>{SETTINGS_TEXT.tbd}</p>
          </div>
        </div>
      )}
    </div>
  );
};
