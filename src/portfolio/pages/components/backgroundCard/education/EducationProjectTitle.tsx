import { Link } from 'react-router';

import { EDUCATION_TEXT } from '@/constants/pages';

interface Props {
  title: string;
  url: string;
}

export const EducationProjectTitle = ({ title, url }: Props) => {
  return (
    <div className="flex flex-1 flex-col items-center gap-2 sm:flex-row sm:justify-between p-2 sm:p-4">
      <div className="text-base">{title}</div>
      <div className="sm:pr-4">
        <Link to={url}>{EDUCATION_TEXT.viewProject}</Link>
      </div>
    </div>
  );
};
