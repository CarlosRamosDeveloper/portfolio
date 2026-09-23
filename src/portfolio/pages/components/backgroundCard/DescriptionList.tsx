import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { DescriptionButton, DescriptionLabel } from '.';
import { Separator } from '..';

interface Props {
  descriptions: string[];
}

const longDescriptionLines = 3;

export const DescriptionList = ({ descriptions }: Props) => {
  if (descriptions.length === 0) return null;

  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation('components');

  const hasLongDescription = descriptions.length > longDescriptionLines;
  const visibleDescription = !isExpanded
    ? descriptions.slice(0, longDescriptionLines)
    : descriptions;

  const handleToggleVisibility = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <Separator />
      <div className="py-2 bg-card-secondary">
        {visibleDescription.map((description, index) => (
          <DescriptionLabel description={description} key={index} />
        ))}
        {hasLongDescription && (
          <DescriptionButton
            isOpen={isExpanded}
            onClick={handleToggleVisibility}
            trueText={t('button.viewLess')}
            falseText={t('button.viewMore')}
          />
        )}
      </div>
    </>
  );
};
