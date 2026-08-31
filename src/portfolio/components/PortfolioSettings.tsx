import { useState } from 'react';
import { Settings } from 'lucide-react';

import { PortfolioLanguageSettings } from '.';

export const PortfolioSettings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleVisibilityToggle = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  return (
    <div className="relative">
      <button
        className="cursor-pointer"
        type="button"
        onClick={handleVisibilityToggle}
        aria-label="Abrir Configuración"
      >
        <Settings />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 rounded-lg border border-border bg-card p-4 text-card-foreground shadow-lg">
          <div>
            <h2 className="font-semibold"> Configuración</h2>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium">Tema</p>
            <PortfolioLanguageSettings />
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium">Selector de idioma</p>
            <p>Próximamente</p>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium">Tamaño de fuente</p>
            <p>Próximamente</p>
          </div>
        </div>
      )}
    </div>
  );
};
