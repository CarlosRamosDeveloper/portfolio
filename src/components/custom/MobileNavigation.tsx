import { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

import { MobileNavigationLinkList } from './MobileNavigationLinkList';
import { navigationLinksData } from '@/data';

const navigationLinks = navigationLinksData;

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative lg:hidden">
      <button className="cursor-pointer" type="button" onClick={handleToggle}>
        <GiHamburgerMenu />
      </button>
      <MobileNavigationLinkList
        isOpen={isOpen}
        navigationItems={navigationLinks}
      />
    </div>
  );
};
