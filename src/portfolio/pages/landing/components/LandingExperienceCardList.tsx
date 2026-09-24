import { LandingExperienceCard } from './landing-experience-card/LandingExperienceCard';
import { useBackground } from '@/hooks';

export const LandingExperienceCardList = () => {
  const data = useBackground({});

  return (
    <div className="mt-3">
      {data.map((item) => (
        <LandingExperienceCard
          item={item}
          key={`${item.type}-${item.data.id}`}
        />
      ))}
    </div>
  );
};
