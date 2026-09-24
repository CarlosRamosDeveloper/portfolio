import { useTranslation } from 'react-i18next';

import { AboutBubble } from '.';

export const GoalsSection = () => {
  const { t } = useTranslation('pages');

  const goalsData = t('about.goalsData', {
    returnObjects: true,
  }) as string[];

  return (
    <div className="flex flex-col items-center mt-5">
      <h3 className="text-2xl text-center py-2">{t('about.longTermGoals')}</h3>
      <div>
        {goalsData.map((text, index) => (
          <AboutBubble text={text} key={index} />
        ))}
      </div>
    </div>
  );
};
