import { EducationData } from '@/portfolio/data/EducationData';
import { EducationCard } from './EducationCard';

const educationData = EducationData.sort().reverse();

export const EducationCardList = () => {
  console.log(educationData);
  return (
    <>
      {educationData.map((education) => (
        <EducationCard key={education.id} education={education} />
      ))}
    </>
  );
};
