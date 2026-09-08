import { LandingFeaturedLabel } from '.';

interface Props {
  title: string;
  status: string;
}

export const LandingFeaturedHeaderCard = ({ title, status }: Props) => {
  return (
    <div className="flex items-center justify-between border-b border-border px-4 py-2 bg-accent mt-1">
      <LandingFeaturedLabel text={title} type="title" />
      <LandingFeaturedLabel text={status} type="status" />
    </div>
  );
};
