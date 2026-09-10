import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { ROUTES } from '@/constants';
import type { HamburgerNavigationItem } from '@/interfaces';
import { MobileNavigationLinkList } from './MobileNavigationLinkList';

const navigationLinks: HamburgerNavigationItem[] = [
  {
    title: 'Portfolio',
    items: [
      {
        label: 'About',
        path: ROUTES.about,
      },
      {
        label: 'Experience',
        path: ROUTES.experience,
      },
      {
        label: 'Education',
        path: ROUTES.education,
      },
      {
        label: 'Contact',
        path: ROUTES.contact,
      },
      {
        label: 'Softskills',
        path: ROUTES.softSkills,
      },
    ],
  },
  {
    title: 'Projects',
    items: [
      {
        label: 'All-Projects',
        path: ROUTES.projects,
      },
      {
        label: 'Featured',
        path: ROUTES.featured,
      },
      {
        label: 'search',
        path: ROUTES.search,
      },
    ],
  },
];

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
