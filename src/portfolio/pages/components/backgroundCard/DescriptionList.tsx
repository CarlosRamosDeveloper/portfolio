import { useState } from 'react';

import { DescriptionButton, DescriptionLabel } from '.';
import { Separator } from '..';
import { PORTFOLIO_SHARED_TEXT } from '@/constants/pages';

interface Props {
  descriptions: string[];
}

const longDescriptionLines = 3;

export const DescriptionList = ({ descriptions }: Props) => {
  if (descriptions.length === 0) return null;

  const [isExpanded, setIsExpanded] = useState(false);

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
            trueText={PORTFOLIO_SHARED_TEXT.buttonViewLess}
            falseText={PORTFOLIO_SHARED_TEXT.buttonViewMore}
          />
        )}
      </div>
    </>
  );
};
