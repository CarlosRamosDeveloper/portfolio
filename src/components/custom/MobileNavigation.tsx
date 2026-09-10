import { useEffect, useRef, useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

import { MobileNavigationLinkList } from './MobileNavigationLinkList';
import { navigationLinksData } from '@/data';

const navigationLinks = navigationLinksData;

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigationRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navigationRef.current &&
        !navigationRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={navigationRef} className="relative lg:hidden">
      <button className="cursor-pointer" type="button" onClick={handleToggle}>
        <GiHamburgerMenu />
      </button>
      <MobileNavigationLinkList
        isOpen={isOpen}
        navigationItems={navigationLinks}
        onClose={handleClose}
      />
    </div>
  );
};
