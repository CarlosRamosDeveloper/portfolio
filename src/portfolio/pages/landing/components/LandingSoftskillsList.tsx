import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

import { LandingSoftskillItem } from './LandingSoftskillItem';
import { ROUTES, SOFT_SKILL_IDS } from '@/constants';
import { LandingLabel } from './LandingLabel';

export const LandingSoftskillsList = () => {
  const { t } = useTranslation('landing');
  const { t: ts } = useTranslation('softSkills');

  const softSkills = SOFT_SKILL_IDS.map((id) => ({
    id,
    name: ts(`items.${id}.name`),
    description: ts(`items.${id}.description`),
  }));

  return (
    <div>
      <div className="text-center">
        <Link to={ROUTES.softSkills}>
          <LandingLabel text={`[${t('softSkills')}]`} type="navigation" />
        </Link>
      </div>
      <div className="mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 bg-card p-2 mt-2">
        {softSkills.map((skill) => (
          <LandingSoftskillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};
