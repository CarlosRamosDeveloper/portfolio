import { ROUTES } from '@/constants';
import { NavLink } from 'react-router';

interface Props {
  section: 'portfolio' | 'projects';
}

const navigationSections = [
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

export const MobileNavigation = ({ section }: Props) => {
  return (
    <div className="bg-accent p-5 lg:hidden">
      {navigationSections.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>

          {section.items.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};
