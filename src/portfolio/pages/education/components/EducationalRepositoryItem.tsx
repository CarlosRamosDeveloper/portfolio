import { EDUCATION_TEXT } from '@/constants/pages';
import { Separator } from '../../components';

interface Props {
  repositoryUrl?: string;
}

export const EducationalRepositoryItem = ({ repositoryUrl }: Props) => {
  if (!repositoryUrl) return null;
  return (
    <div>
      <Separator />
      <div className="m-1 px-6">
        <a className="text-xs" href={repositoryUrl} target="_blank">
          {EDUCATION_TEXT.navigateRepository}
        </a>
      </div>
    </div>
  );
};
