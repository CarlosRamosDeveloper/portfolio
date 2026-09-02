import { GoalsData, GreetData } from '@/portfolio/data';
import { GoalsSection, GreetSection } from './components';

const greetData = GreetData;
const goalsData = GoalsData;

export const AboutPage = () => {
  return (
    <>
      <div className="w-full">
        <h2 className="text-center text-2xl font-semibold mb-5">
          Acerca de mi
        </h2>
        <GreetSection data={greetData} />
        <GoalsSection data={goalsData} />
      </div>
    </>
  );
};
