import { useEffect, useRef, useState } from 'react';

import { Settings } from 'lucide-react';

import { PortfolioLanguageSettings } from '.';

export const PortfolioSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    console.log('UseEffect: Entrando en efecto');
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        console.log('UseEffect: Dentro del mouse event');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      console.log('UseEffect: Saliendo del efecto');
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
