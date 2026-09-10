import type { HamburgerNavigationItem } from '@/interfaces';
import { MobileNavigationItem } from '..';

interface Props {
  isOpen: boolean;
  navigationItems: HamburgerNavigationItem[];
  onClose: () => void;
}

export const MobileNavigationLinkList = ({
  isOpen,
  navigationItems,
  onClose,
}: Props) => {
  return (
    <div>
      {isOpen && (
        <div className="absolute right-0 top-full z-50 bg-card pb-4 pt-2 px-3">
          {navigationItems.map((section, index) => (
            <div key={index}>
              <MobileNavigationItem label={section.title} type="title" />

              {section.items.map((item) => (
                <MobileNavigationItem
                  onClick={onClose}
                  label={item.label}
                  type="link"
                  key={item.path}
                  path={item.path}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
