import { useTranslation } from 'react-i18next';

import { AboutBubble } from '.';

export const GreetSection = () => {
  const { t } = useTranslation('pages');

  const greetData = t('about.greetData', {
    returnObjects: true,
  }) as string[];

  return (
    <div className="flex flex-col">
      <h3 className="text-2xl text-center py-2">{t('about.greet')}</h3>
      <div>
        {greetData.map((text, index) => (
          <AboutBubble key={index} text={text} />
        ))}
      </div>
    </div>
  );
};
