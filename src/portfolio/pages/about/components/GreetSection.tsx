import { ABOUT_TEXT } from '@/constants/pages';
import { AboutBubble } from '.';

export const GreetSection = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl text-center py-2">{ABOUT_TEXT.greet}</h3>
      <div>
        {ABOUT_TEXT.greetData.map((text, index) => (
          <AboutBubble key={index} text={text} />
        ))}
      </div>
    </div>
  );
};
