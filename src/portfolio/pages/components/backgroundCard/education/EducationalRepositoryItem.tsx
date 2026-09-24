import { useTranslation } from 'react-i18next';

import { Separator } from '../..';

interface Props {
  repositoryUrl: string | null;
}

export const EducationalRepositoryItem = ({ repositoryUrl }: Props) => {
  if (!repositoryUrl) return null;

  const { t } = useTranslation('components');

  return (
    <div>
      <Separator />
      <div className="m-1 px-6">
        <a className="text-xs" href={repositoryUrl} target="_blank">
          {t('backgroundCard.navigateRepository')}
        </a>
      </div>
    </div>
  );
};
