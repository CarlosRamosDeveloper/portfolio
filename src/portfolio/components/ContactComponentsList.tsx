import { IoIosMailOpen } from 'react-icons/io';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import { ContactComponent } from '.';

const emailParts = {
  user: 'carlosramosdev',
  domain: 'protonmail',
  tld: 'com',
};

interface Props {
  isFooter?: boolean;
}

export const ContactComponentsList = ({ isFooter = false }: Props) => {
  const handleEmailComposition = () => {
    const email = `${emailParts.user}@${emailParts.domain}.${emailParts.tld}`;
    window.location.href = `mailto:${email}`;
  };

  const handleNavigate = (url: string) => {
    window.open(url);
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
        onClick={() =>
          handleNavigate('https://www.linkedin.com/in/carlosramosdeveloper/')
        }
        isFooter={isFooter}
      />
      <ContactComponent
        icon={FaGithubSquare}
        label="Github"
        onClick={() =>
          handleNavigate('https://github.com/CarlosRamosDeveloper')
        }
        isFooter={isFooter}
      />
    </div>
  );
};
