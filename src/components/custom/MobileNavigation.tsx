interface Props {
  section: 'portfolio' | 'projects';
}

export const MobileNavigation = ({ section }: Props) => {
  return <div className="bg-accent p-5 lg:hidden">{section}</div>;
};
