import { Link } from 'react-router';

import { EDUCATION_TEXT } from '@/constants/pages';

interface Props {
  title: string;
  url: string;
}

export const EducationProjectTitle = ({ title, url }: Props) => {
  return (
    <div className="justify-between flex flex-1 items-center">
      <div className="text-base p-4">{title}</div>
      <div className="p-4">
        <Link to={url}>{EDUCATION_TEXT.viewProject}</Link>
      </div>
    </div>
  );
};
