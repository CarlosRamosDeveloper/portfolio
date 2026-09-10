import { LandingFeaturedLabel } from '.';

interface Props {
  title: string;
  status: string;
}

export const LandingFeaturedHeaderCard = ({ title, status }: Props) => {
  return (
    <div className="mt-1 flex flex-col items-center border-b border-border bg-accent px-4 py-2 lg:flex-row lg:justify-between">
      <LandingFeaturedLabel text={title} type="title" />
      <LandingFeaturedLabel text={status} type="status" />
    </div>
  );
};
