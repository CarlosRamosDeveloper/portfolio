import { ABOUT_TEXT } from '@/constants/pages';
import { GoalsSection, GreetSection } from './components';
import { FramePage, PageTitle } from '@/components';

export const AboutPage = () => {
  return (
    <FramePage>
      <PageTitle title={ABOUT_TEXT.aboutMe} />
      <GreetSection />
      <GoalsSection />
    </FramePage>
  );
};
