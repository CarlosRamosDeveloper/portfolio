import { ABOUT_TEXT } from '@/constants/pages';
import { GoalsSection, GreetSection } from './components';

export const AboutPage = () => {
  return (
    <>
      <div className="w-full">
        <h2 className="text-center text-2xl font-semibold mb-5">
          {ABOUT_TEXT.aboutMe}
        </h2>
        <GreetSection />
        <GoalsSection />
      </div>
    </>
  );
};
