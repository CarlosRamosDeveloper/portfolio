import { IoIosMailOpen } from 'react-icons/io';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import { ContactComponent } from '.';
import { EXTERNAL_URL } from '@/constants';
import { handleNavigateOnNewWindow } from '../shared';

interface Props {
  isFooter?: boolean;
}

export const ContactComponentsList = ({ isFooter = false }: Props) => {
  const handleEmailComposition = () => {
    const email = `${EXTERNAL_URL.emailUser}@${EXTERNAL_URL.emailDomain}.${EXTERNAL_URL.emailTld}`;
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl items-center justify-center">
      <ContactComponent
        icon={IoIosMailOpen}
        label="Email"
        onClick={handleEmailComposition}
        isFooter={isFooter}
      />
      <ContactComponent
        icon={FaLinkedin}
        label="LinkedIn"
        onClick={() => handleNavigateOnNewWindow(EXTERNAL_URL.linkedIn)}
        isFooter={isFooter}
      />
      <ContactComponent
        icon={FaGithubSquare}
        label="Github"
        onClick={() => handleNavigateOnNewWindow(EXTERNAL_URL.github)}
        isFooter={isFooter}
      />
    </div>
  );
};
