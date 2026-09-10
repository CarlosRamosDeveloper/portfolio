import type { HamburgerNavigationItem } from '@/interfaces';
import { MobileNavigationItem } from '..';

interface Props {
  isOpen: boolean;
  navigationItems: HamburgerNavigationItem[];
}

export const MobileNavigationLinkList = ({
  isOpen,
  navigationItems,
}: Props) => {
  return (
    <div>
      {isOpen && (
        <div className="absolute right-0 top-full z-50 bg-card pb-4 pt-2 px-3">
          {navigationItems.map((section, index) => (
            <>
              <MobileNavigationItem
                label={section.title}
                type="title"
                key={index}
              />

              {section.items.map((item, index) => (
                <MobileNavigationItem
                  label={item.label}
                  type="link"
                  key={index}
                  path={item.path}
                />
              ))}
            </>
          ))}
        </div>
      )}
    </div>
  );
};
