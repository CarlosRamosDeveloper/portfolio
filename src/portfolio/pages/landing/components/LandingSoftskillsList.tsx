import { SoftSkillsData } from '@/data/SoftSkillsData';
import { LandingSoftskillItem } from './LandingSoftskillItem';
import { Link } from 'react-router';
import { ROUTES } from '@/constants';
import { LANDING_TEXT } from '@/constants/pages';
import { LandingLabel } from './LandingLabel';

const skillsList = [...SoftSkillsData];

export const LandingSoftskillsList = () => {
  return (
    <div>
      <div className="text-center">
        <Link to={ROUTES.softSkills}>
          <LandingLabel
            text={`[${LANDING_TEXT.softSkills}]`}
            type="navigation"
          />
        </Link>
      </div>
      <div className="mx-auto grid grid-cols-4 gap-3 bg-card p-2 mt-2">
        {skillsList.map((skill) => (
          <LandingSoftskillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};
