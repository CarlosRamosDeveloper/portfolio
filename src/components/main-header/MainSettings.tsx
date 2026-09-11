import { useCallback, useState } from 'react';

import { Settings } from 'lucide-react';

import { SETTINGS_TEXT } from '@/constants/layout';
import { MainThemeSelector } from './MainThemeSelector';
import { useClickOutside } from '@/hooks';

export const MainSettings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleVisibilityToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const settingsRef = useClickOutside<HTMLDivElement>(isOpen, handleClose);

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
            <MainThemeSelector />
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
