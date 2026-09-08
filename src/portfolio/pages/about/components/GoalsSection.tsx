import { ABOUT_TEXT } from '@/constants/pages';
import { AboutBubble } from '.';

export const GoalsSection = () => {
  return (
    <div className="text-xl flex flex-col items-center mt-5">
      <h3 className="mb-2">{ABOUT_TEXT.longTermGoals}</h3>
      <div>
        {ABOUT_TEXT.goalsData.map((text, index) => (
          <AboutBubble text={text} key={index} />
        ))}
      </div>
    </div>
  );
};
