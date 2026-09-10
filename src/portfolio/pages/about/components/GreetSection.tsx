import { ABOUT_TEXT } from '@/constants/pages';
import { AboutBubble } from '.';

export const GreetSection = () => {
  return (
    <div className="flex flex-col">
      <h3 className=" text-xl text-center lg:text-2xl mb-2 font-semibold">
        {ABOUT_TEXT.greet}
      </h3>
      <div>
        {ABOUT_TEXT.greetData.map((text, index) => (
          <AboutBubble key={index} text={text} />
        ))}
      </div>
    </div>
  );
};
