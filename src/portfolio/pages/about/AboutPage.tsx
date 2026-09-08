import { ABOUT_TEXT } from '@/constants/pages';
import { GoalsSection, GreetSection } from './components';
import { PageTitle } from '@/components';

export const AboutPage = () => {
  return (
    <>
      <div className="w-full">
        <PageTitle title={ABOUT_TEXT.aboutMe} />
        <GreetSection />
        <GoalsSection />
      </div>
    </>
  );
};
