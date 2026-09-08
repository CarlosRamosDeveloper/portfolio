import { SoftSkillsData } from '@/data/SoftSkillsData';
import { LandingSoftskillItem } from './LandingSoftskillItem';
import { Link } from 'react-router';
import { ROUTES } from '@/constants';

const skillsList = [...SoftSkillsData];

export const LandingSoftskillsList = () => {
  return (
    <div>
      <div className="text-center">
        <Link to={ROUTES.softSkills}>
          <h3 className="text-xl my-3">[Mis habilidades blandas]</h3>
        </Link>
      </div>
      <div className="mx-auto grid max-w-3xl grid-cols-4 gap-3 bg-card p-2">
        {skillsList.map((skill) => (
          <LandingSoftskillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};
