import { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

import { MobileNavigationLinkList } from './MobileNavigationLinkList';
import { navigationLinksData } from '@/data';
import { useClickOutside } from '@/hooks';

const navigationLinks = navigationLinksData;

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const navigationRef = useClickOutside<HTMLDivElement>(isOpen, handleClose);

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
